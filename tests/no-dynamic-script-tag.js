const rule = require('../lib/rules/no-dynamic-script-tag')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester()

ruleTester.run('no-dynamic-script-tag', rule, {
  valid: [
    {
      code: 'document.createElement("div")'
    },
    {
      code: 'document.createElement("span")'
    },
    {
      code: 'document.createElement("span").type = "foo"'
    }
  ],
  invalid: [
    {
      code: 'document.createElement("script")',
      errors: [
        {
          message: "Don't create dynamic script tags, add them in the server template instead.",
          type: 'Literal'
        }
      ]
    },
    {
      code: 'document.createElement("span").type = "text/javascript"',
      errors: [
        {
          message: "Don't create dynamic script tags, add them in the server template instead.",
          type: 'Literal'
        }
      ]
    }
  ]
})
