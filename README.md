# tslint-config-dollarshaveclub

[![Build Status](https://travis-ci.org/dollarshaveclub/tslint-config-dollarshaveclub.svg?branch=master)](https://travis-ci.org/dollarshaveclub/tslint-config-dollarshaveclub)
[![Greenkeeper badge](https://badges.greenkeeper.io/dollarshaveclub/tslint-config-dollarshaveclub.svg)](https://greenkeeper.io/)

This repository contains Dollar Shave Club [Tslint](https://palantir.github.io/tslint/) rules.

This project is beta. It will be published soon.

## Installation

```
$ npm install --save-dev tslint-config-dollarshaveclub
```

## Usage

Once the `tslint-config-dollarshaveclub` package is installed, used by specifying `dollarshaveclub`.
- This project will soon support React ts linting.

For frameworkless JavaScript modules:

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
  "extends": "tslint-config-dollarshaveclub/react"
}
```

## Dependencies

- **[globby](https://github.com/sindresorhus/globby):** used for testing all test files in `tests/`.
- **[mocha](https://mochajs.org/):** used for testing.
- **[tslint](https://github.com/palantir/tslint):** used for linting typescript (`.ts`) files.
- **[tslint-config-standard](https://github.com/blakeembrey/tslint-config-standard):** extends `tslint`.
- **[tslint-react](https://github.com/palantir/tslint-react):** extends `tslint` for `react`.
- **[typescript](https://github.com/Microsoft/TypeScript):** add type checking for JavaScript.

## License

MIT
