require('babel-polyfill');

import thread from './thread';

// Thread
exports.getLatestThreads = thread.getLatestThreads;
exports.getLatestHotThreads = thread.getLatestHotThreads;
exports.getLatestNewThreads = thread.getLatestNewThreads;
exports.getChannel = thread.getChannel;
exports.getThread = thread.getThread;
exports.search = thread.search;
