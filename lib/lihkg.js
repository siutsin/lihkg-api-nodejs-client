require('babel-polyfill');

import axios from 'axios';

let lihkg = () => {
};

let axiosInstance = axios.create({
  baseURL: 'https://lihkg.com/',
  timeout: 10000,
  headers: {
    'X-DIGEST': 'TODO',
    'User-Agent':	'lihkg-api-nodejs-client'
  }
});

lihkg.getLatestThreads = async(page = 1, count = 30) => {
  try {
    let threads = await axiosInstance.get('api_v1/thread/latest', {
      params: {
        page: page,
        count: count
      }
    });
    return threads.data;
  } catch (e) {
    // TODO:
    throw e;
  }
};

lihkg.getChannel = async(category = 1, page = 1, count = 30) => {
  try {
    const threads = await axiosInstance.get('api_v1/thread/category', {
      params: {
        cat_id: category,
        page: page,
        count: count
      }
    });
    return threads.data;
  } catch (e) {
    // TODO:
    throw e;
  }
};

lihkg.getThread = async(threadID = 0, page = 1) => {
  try {
    const thread = await axiosInstance.get('api_v1/thread/' + threadID + '/page/' + page);
    return thread.data;
  } catch (e) {
    // TODO:
    throw e;
  }
};

module.exports = lihkg;
