<!--
 * @Author: Aaron
 * @Date: 2020-01-15 18:13:06
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 16:41:48
 * @Description: file content
 -->
### <h1 align="center">vue-auto-name-loader</h1>

<div align="center">
  <br />
  <a href="https://github.com/AaronBank/vue-auto-name-loader/blob/master/README.ZH.md">Chinese</a>
  <a href="https://github.com/AaronBank/vue-auto-name-loader" style="margin-left: 12px;">English</a>
  <br /><br />
  <img src="https://img.shields.io/badge/license-MIT-green.svg"/>
  <img src="https://img.shields.io/badge/npm-v6.5.0-blue.svg" style="margin-left: 12px;"/>
  <img src="https://img.shields.io/badge/Version-1.0.0-brightgreen.svg" style="margin-left: 12px;"/>
</div>
<br/>


### Installation

```javascript
npm install vue-auto-name-loader -D
```

### Use
**Modify `webpack: vue-loader` related configuration**

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

> Before conversion

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

> After conversion

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

### Parameter

- prefix：name前缀设置，默认为空

## Licence ##
**[MIT](https://github.com/AaronBank/vue-auto-name-loader/blob/master/LICENSE)**