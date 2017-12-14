# tslint-config-dollarshaveclub [![Build Status](https://travis-ci.org/dollarshaveclub/tslint-config-dollarshaveclub.svg?branch=master)](https://travis-ci.org/dollarshaveclub/tslint-config-dollarshaveclub) [![Greenkeeper badge](https://badges.greenkeeper.io/dollarshaveclub/tslint-config-dollarshaveclub.svg)](https://greenkeeper.io/)


## Installation

```
$ npm install --save-dev tslint-config-dollarshaveclub
```


## Usage

Once the `tslint-config-dollarshaveclub` package is installed, you can use it by specifying `dollarshaveclub`, `dollarshaveclub/ember`, or `dollarshaveclub/react` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [TSLint configuration](http://eslint.org/docs/user-guide/configuring).

For frameworkless JS modules:

```js
{
  "extends": "dollarshaveclub",
  "rules": {
    // Additional, per-project rules...
  }
}
```

For React projects:

```js
{
  "extends": "dollarshaveclub/react"
}
```

## License

MIT
