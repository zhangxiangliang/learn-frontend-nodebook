var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var eventproxy = require('eventproxy');
var url = require('url');

// 初始化变量
var app = express();

var cnodeUrl = 'https://cnodejs.org/';

// 设置请求
app.get('/', function(req, respond) {
  superagent.get(cnodeUrl)
  .end(function (err, res) {
    if (err) {
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element);
      var href = url.resolve(cnodeUrl, $element.attr('href'));
      topicUrls.push(href);
    });

    var ep = new eventproxy();

    ep.after('topic_html', topicUrls.length, function (topics) {
      var index = 0;
      topics = topics.map(function (topicPair) {
        if(!topicPair[0]) return ;
        var topicUrl = topicPair[0];
        var topicHtml = topicPair[1];
        var $ = cheerio.load(topicHtml);
        var comment = [];
        $('.reply_item').each(function (index, element) {
          $element = $(element);
          comment.push({
            comment_id: index,
            user: $(element).find($('.dark.reply_author')).text().trim(),
            comment: $(element).find($('.markdown-text p')).text().trim()
          });
        });
        return ({
          id: index++,
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment: comment,
        });
      });
      console.log('final:');
      respond.send(topics);
    });

    topicUrls.forEach(function (topicUrl) {
      superagent.get(topicUrl)
        .end(function (err, res) {
          if(!err) {
            console.log('fetch ' + topicUrl + ' successful');
            ep.emit('topic_html', [topicUrl, res.text, true]);
          } else {
            ep.emit('topic_html', [false]);
          }
        });
    });
  });
});

// 启动服务器
app.listen(3000, function () {
  console.log('app running ...');
});

