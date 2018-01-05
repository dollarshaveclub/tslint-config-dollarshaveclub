"use strict"

module.exports = {
  extends: ['tslint-config-standard'],
  rules: {
    "await-promise": false, // awaiting fix in next version https://github.com/palantir/tslint/issues/3381
    "jsx-no-lambda": false,
    "no-empty": false,
    "trailing-comma": [true, { "multiline": "always", "singleline": "never" }],
  },
}

