/*
 * @Author: Aaron
 * @Date: 2020-01-15 18:15:19
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 15:46:38
 * @Description: Generate new content
 */
const generate = require('@babel/generator').default;

module.exports = function(ast, source) {
    return generate(ast, {}, source);
};