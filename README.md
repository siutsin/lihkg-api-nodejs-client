[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)
[![dependency](https://david-dm.org/siutsin/lihkg-api-nodejs-client.svg)](https://david-dm.org/siutsin/lihkg-api-nodejs-client.svg)
[![devDependency Status](https://david-dm.org/siutsin/lihkg-api-nodejs-client/dev-status.svg)](https://david-dm.org/siutsin/lihkg-api-nodejs-client#info=devDependencies)
[![Build Status](https://travis-ci.org/siutsin/lihkg-api-nodejs-client.svg?branch=master)](https://travis-ci.org/siutsin/lihkg-api-nodejs-client)
[![Coverage Status](https://coveralls.io/repos/github/siutsin/lihkg-api-nodejs-client/badge.svg)](https://coveralls.io/github/siutsin/lihkg-api-nodejs-client)

lihkg-api-nodejs-client
=========

LIHKG API client for node.js

## Installation

```
npm install lihkg-api-nodejs-client --save
```

```
const lihkg = require('lihkg-api-nodejs-client');
```

## Usage

* [.getLatestThreads([page, count]) ⇒ <code>Promise</code>](#getLatestThreads)
* [.getChannel(category, [page, count]) ⇒ <code>Promise</code>](#getChannel)
* [.getThread(threadID, [page, count]) ⇒ <code>Promise</code>](#getThread)

<a name="getLatestThreads"></a>

### .getLatestThreads([page, count]) ⇒ <code>Promise</code>
Use this method to get the latest threads in 吹水台.

| Param | Type | Description |
| --- | --- | --- |
| [page] | <code>Number</code> | default: 1 |
| [count] | <code>Number</code> | default: 30 |

<a name="getChannel"></a>

### .getChannel(category, [page, count]) ⇒ <code>Promise</code>
Use this method to get the threads in a category(channel).

| Param | Type | Description |
| --- | --- | --- |
| category | <code>Number</code> | Refer to [Categories](https://github.com/siutsin/lihkg-api-nodejs-client/blob/master/lib/constants.js) |
| [page] | <code>Number</code> | default: 1 |
| [count] | <code>Number</code> | default: 30 |

<a name="getThread"></a>

### .getThread(threadID, [page, count]) ⇒ <code>Promise</code>
Use this method to get a thread for the unique ID.

| Param | Type | Description |
| --- | --- | --- |
| threadID | <code>Number</code> | Thread id returned from the threads list |
| [page] | <code>Number</code> | default: 1 |
| [count] | <code>Number</code> | default: 30 |

## Special Thanks

- 連尼住
- HKG+
- 望遠
- [https://na.cx](https://na.cx)
- [colloquet](https://github.com/colloquet)

## Author

[@Simon__Li](https://twitter.com/Simon__LI)

## License

`lihkg-api-nodejs-client` is available under the [MIT license](http://siutsin.mit-license.org). See the LICENSE file for more info.
