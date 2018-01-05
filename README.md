# tslint-config-dollarshaveclub 

[![Build Status](https://travis-ci.org/dollarshaveclub/tslint-config-dollarshaveclub.svg?branch=master)](https://travis-ci.org/dollarshaveclub/tslint-config-dollarshaveclub) 
[![Greenkeeper badge](https://badges.greenkeeper.io/dollarshaveclub/tslint-config-dollarshaveclub.svg)](https://greenkeeper.io/)


## Installation

```
$ npm install --save-dev tslint-config-dollarshaveclub
```


## Usage

Once the `tslint-config-dollarshaveclub` package is installed, it can be used by specifying `dollarshaveclub`, or `dollarshaveclub/react`.

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


## DevDependencies

- **[globby](https://github.com/sindresorhus/globby):** used for testing all test files in `tests/`.
- **[mocha](https://mochajs.org/):** used for testing.
- **[tslint](https://github.com/palantir/tslint):** used for linting typescript (`.ts`) files.
- **[tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard):** extends `tslint`.
- **[tslint-react](https://github.com/palantir/tslint-react):** extends `tslint` for `react`.
- **[typescript](https://github.com/Microsoft/TypeScript):** add type checking for JavaScript.

## License

MIT
