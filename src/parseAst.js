/*
 * @Author: Aaron
 * @Date: 2020-02-28 15:31:23
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 15:48:13
 * @Description: parser ast tree
 */
const parser = require('@babel/parser');

module.exports = function(source) {
    const ast = parser.parse(source, {
        sourceType: "module"
    });

    return ast;
};
