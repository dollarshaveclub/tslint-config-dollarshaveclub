'use strict'

module.exports = {
  extends: [require.resolve('tslint-react'), require.resolve('./')],
  rules: {
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'import-blacklist': [
      true,
      ['^@dollarshaveclub/.*/src/.*'], // prevent importing from src

    ],
  },
}
