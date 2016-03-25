# Sass 变量
##### 使用 `$` 符号来表示变量
```css
$lionis-background-color : #fff;
$lionis-font             : Arial, sans-serif;
```
##### 拥有作用域
```css
$lionis-font : Arial, sans-serif;
#lionis {
  $lionis-background-color : #fff;
  font-family: $lionis-font;
  background-color: $lionis-background-color;
}

// 编译后
#lionis {
  font-family: Arial, sans-serif;
  background-color: #fff;
}
```
##### 变量引用变量
```css
$lionis-highlight-color: #fff;
$lionis-highlight-border: 1px solid $lionis-highlight-color;
#lionis {
  border: $lionis-highlight-border;
}

// 编译后
#lionis {
  border: 1px solid #fff;
}
```

##### 中划线和下划线
```css
$lionis-color: blue;
#lionis {
  color: $lionis_color;
}

// 编译后
#lionis {
  color: blue;
}
```
