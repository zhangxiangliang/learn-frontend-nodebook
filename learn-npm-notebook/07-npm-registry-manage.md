# 破墙大作战 - nrm
由于 `npm` 安装的软件源服务器在国外，有时候安装会等待非常久的时间，甚至会导致安装失败。这时候可以使用 `nrm` 来管理 `npm` 安装的软件源。

## 安装
```
npm install -g nrm
```

## 使用
##### 查看可用源
```
# 命令
nrm ls	

# 显示
* npm -----  https://registry.npmjs.org/
  cnpm ----  http://r.cnpmjs.org/
  taobao --  http://registry.npm.taobao.org/
  nj ------  https://registry.nodejitsu.com/
  rednpm -- http://registry.mirror.cqupt.edu.cn
  skimdb -- https://skimdb.npmjs.com/registry
```

##### 使用源
```
nrm use <registry>
```

##### 测试源的速度
```
nrm test
```

