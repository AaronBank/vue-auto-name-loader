/*
 * @Author: Aaron
 * @Date: 2020-02-28 15:31:33
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 16:24:51
 * @Description: traverse ast and modify
 */
const t = require('@babel/types');
const traverse = require('@babel/traverse').default;

let id = 0

module.exports = function(ast, prefix) {
    prefix = prefix ? prefix + '-' : ''
    traverse(ast, {
        ObjectExpression(path) {
            // 找到所属name节点组
            const properties = path.node.properties;
            // 判断是否存在name属性
            const presence = properties.filter(nodePath => nodePath.key.name === 'name')[0];

            if (presence) {
                const newNode = t.stringLiteral(`${prefix}${++id}`);

                presence.value = newNode;
            } else {
                const key = t.identifier('name');
                const value = t.stringLiteral(`${prefix}${++id}`);
                const objectProperty = t.objectProperty(key, value);

                properties.unshift(objectProperty);
            }
            path.stop();
        }
    });

    return ast;
};
