'use strict'

module.exports = {
  extends: ['tslint-config-standard'],
  rules: {
    'await-promise': false, // awaiting fix in next version https://github.com/palantir/tslint/issues/3381
    'no-empty': false,
    'no-floating-promises': false,
    'trailing-comma': [true, { multiline: 'always', singleline: 'never' }],
  },
}
