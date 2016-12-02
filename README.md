[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://img.shields.io/badge/license-MIT-blue.svg)
[![dependency](https://david-dm.org/siutsin/lihkg-api-nodejs-client.svg)](https://david-dm.org/siutsin/lihkg-api-nodejs-client.svg)
[![devDependency Status](https://david-dm.org/siutsin/lihkg-api-nodejs-client/dev-status.svg)](https://david-dm.org/siutsin/lihkg-api-nodejs-client#info=devDependencies)
[![Build Status](https://travis-ci.org/siutsin/lihkg-api-nodejs-client.svg?branch=master)](https://travis-ci.org/siutsin/lihkg-api-nodejs-client)
[![Coverage Status](https://coveralls.io/repos/github/siutsin/lihkg-api-nodejs-client/badge.svg)](https://coveralls.io/github/siutsin/lihkg-api-nodejs-client)

# lihkg-api-nodejs-client
=========

LIHKG API client for node.js

## Installation

```
npm install lihkg-api-nodejs-client --save
```

## TL;DR

```javascript
const lihkg = require('lihkg-api-nodejs-client');
lihkg.getLatestBlowWater().then(result => {
  // threads from 吹水台
}).catch(error => {
  // handle error
});
```

## Usage

#### Thread

* [.getLatestBlowWater([page, count]) ⇒ `Promise`](#thread.getLatestBlowWater)
* [.getLatestHot([page, count]) ⇒ `Promise`](#thread.getLatestHot)
* [.getLatestNew([page, count]) ⇒ `Promise`](#thread.getLatestNew)
* [.getChannel(category, [page, count]) ⇒ `Promise`](#thread.getChannel)
* [.getThread(threadID, [page, count]) ⇒ `Promise`](#thread.getThread)
* [.search(query, [page, count]) ⇒ `Promise`](#thread.search)

### Thread

<a name="thread.getLatestBlowWater"></a>

#### .getLatestBlowWater([page, count]) ⇒ `Promise`
Use this method to get the latest threads in 吹水台.

| Param | Type | Description |
| --- | --- | --- |
| [page] | `Number` | default: 1 |
| [count] | `Number` | default: 30 |

<a name="thread.getLatestHot"></a>

#### .getLatestHot([page, count]) ⇒ `Promise`
Use this method to get the latest hot threads.

| Param | Type | Description |
| --- | --- | --- |
| [page] | `Number` | default: 1 |
| [count] | `Number` | default: 30 |

<a name="thread.getLatestNew"></a>

#### .getLatestNew([page, count]) ⇒ `Promise`
Use this method to get the latest new threads.

| Param | Type | Description |
| --- | --- | --- |
| [page] | `Number` | default: 1 |
| [count] | `Number` | default: 30 |

<a name="thread.getChannel"></a>

#### .getChannel(category, [page, count]) ⇒ `Promise`
Use this method to get the threads in a category(channel).

| Param | Type | Description |
| --- | --- | --- |
| category | `Number` | Refer to [Categories](https://github.com/siutsin/lihkg-api-nodejs-client/blob/master/lib/constants.js) |
| [page] | `Number` | default: 1 |
| [count] | `Number` | default: 30 |

<a name="thread.getThread"></a>

#### .getThread(threadID, [page, count]) ⇒ `Promise`
Use this method to get a thread for the unique ID.

| Param | Type | Description |
| --- | --- | --- |
| threadID | `Number` | Thread id returned from the threads list |
| [page] | `Number` | default: 1 |
| [count] | `Number` | default: 30 |

<a name="thread.search"></a>

#### .search(query, [page, count]) ⇒ `Promise`
Use this method to search threads contain the query in the title.

| Param | Type | Description |
| --- | --- | --- |
| query | `String` | query string |
| [page] | `Number` | default: 1 |
| [count] | `Number` | default: 30 |

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
