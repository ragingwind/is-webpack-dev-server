# is-webpack-dev-server [![Build Status](https://travis-ci.org/ragingwind/is-webpack-dev-server.svg?branch=master)](https://travis-ci.org/ragingwind/is-webpack-dev-server)

> Check your script is running on webpack-dev-server


## Install

```
$ npm install --save is-webpack-dev-server
```


## Usage

You will get true value from this module as you are in running test your app with `webpack-dev-server` command

```js
const isWebpackDevServer = require('is-webpack-dev-server');

console.log(isWebpackDevServer);
//=> true
```

## License

MIT © [Jimmy Moon](http://ragingwind.me)
