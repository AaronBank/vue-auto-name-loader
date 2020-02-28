/*
 * @Author: Aaron
 * @Date: 2020-01-15 18:15:32
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 16:23:11
 * @Description: install
 */
const verification = require('./verification');
const parseAst = require('./parseAst');
const traverseAst = require('./traverseAst');
const generate = require('./generate');

module.exports = function(source) {
    const callback = this.async();
    // 验证方法是否成功，并返回指定前缀
    const prefix = verification(this);
    // 解析source为Ast树
    const ast = parseAst(source);
    // 遍历处理Ast
    const astResult = traverseAst(ast, prefix);
    // 使用处理后Ast生成code
    const newSource = generate(astResult);
    // 返回code及Ast
    callback(null, newSource.code, null, astResult);
};
