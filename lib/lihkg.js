require('babel-polyfill');

import thread from './thread';
import auth from './auth';
import axios from 'axios';
import c from './constants';

axios.defaults.baseURL = process.env.BASE_URL || c.CONFIG.BASE_URL;
axios.defaults.timeout = process.env.TIMEOUT || c.CONFIG.TIMEOUT;
axios.defaults.headers.common['User-Agent'] = process.env.USER_AGENT || c.CONFIG.USER_AGENT;
axios.defaults.headers.common['X-DEVICE-TYPE'] = process.env.DEVICE_TYPE || c.CONFIG.DEVICE_TYPE;
axios.defaults.headers.common['X-DEVICE'] = '';
axios.defaults.headers.common['X-USER'] = '';
axios.defaults.headers.common['X-REQUEST-TIME'] = '';
axios.defaults.headers.common['X-DIGEST'] = '';

// Thread
exports.getLatestBlowWater = thread.getLatestBlowWater;
exports.getLatestHot = thread.getLatestHot;
exports.getLatestNew = thread.getLatestNew;
exports.getChannel = thread.getChannel;
exports.getThread = thread.getThread;
exports.search = thread.search;

// Auth
exports.login = auth.login;

