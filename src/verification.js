/*
 * @Author: Aaron
 * @Date: 2020-02-28 15:31:04
 * @LastEditors: Aaron
 * @LastEditTime: 2020-02-28 16:20:41
 * @Description: verification options
 */
const { getOptions } = require('loader-utils')
const validate = require('schema-utils')

const schema = {
    type: 'object',
    properties: {
        prefix: {
            type: 'string'
        }
    },
    additionalProperties: false
};

module.exports = function(_self) {
    const options = getOptions(_self) || {};

    validate(schema, options, {
        name: "autoName loader",
    });

    return options.prefix || ''
};
