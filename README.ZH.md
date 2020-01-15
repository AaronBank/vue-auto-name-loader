### <h1 align="center">vue-auto-name-loader</h1>

<div align="center">
  <br />
  <a href="https://github.com/AaronBank/vue-auto-name-loader/blob/master/README.ZH.md">中文文档</a>
  <a href="https://github.com/AaronBank/vue-auto-name-loader" style="margin-left: 12px;">英文文档</a>
  <br /><br />
  <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
  <img src="https://img.shields.io/badge/npm-v6.5.0-blue.svg" style="margin-left: 12px;"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen.svg" style="margin-left: 12px;"/>
</div>
<br/>


### 安装

```javascript
npm install vue-auto-name-loader -D
```

### 使用
**修改 `webpack：vue-loader` 相关配置**

```javascript
module.exports = {
  ...
  module: {
    rules: [
        ...
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: [
                        { loader: 'vue-auto-name-loader', options: { prefix: 'what' } }
                    ]
                }
            }
        },
        ...
    ]
  }
  ...
}
```

> 转化前

```html
<template>
    ...
</template>
<script>
export default {
    data() {
        return {
            name: 1344
        }
    }
}
</script>
<style>
    ...
</style>
```

> 转化后


```html
<template>
    ...
</template>
<script>
export default {
    name: 'what-1',
    data() {
        return {
            name: 1344
        }
    }
}
</script>
<style>
    ...
</style>
```

### 参数

- prefix：name前缀设置，默认为空

## Licence ##
**[MIT](https://github.com/AaronBank/vue-auto-name-loader/blob/master/LICENSE)**