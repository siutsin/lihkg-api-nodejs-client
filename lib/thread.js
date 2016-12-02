require('babel-polyfill');

import axios from 'axios';

let axiosInstance = axios.create({
  baseURL: 'https://lihkg.com/',
  timeout: 10000,
  headers: {
    'X-DIGEST': 'TODO',
    'User-Agent': 'lihkg-api-nodejs-client'
  }
});

exports.getLatestBlowWater = async(page = 1, count = 30) => {
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

exports.getLatestHot = async(page = 1, count = 30) => {
  try {
    let threads = await axiosInstance.get('api_v1/thread/hot', {
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

exports.getLatestNew = async(page = 1, count = 30) => {
  try {
    let threads = await axiosInstance.get('api_v1/thread/news', {
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

exports.getChannel = async(category = 1, page = 1, count = 30) => {
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

exports.getThread = async(threadID = 0, page = 1) => {
  try {
    const thread = await axiosInstance.get('api_v1/thread/' + threadID + '/page/' + page);
    return thread.data;
  } catch (e) {
    // TODO:
    throw e;
  }
};

exports.search = async(query = '', page = 1, count = 30) => {
  try {
    const thread = await axiosInstance.get('api_v1/thread/search', {
      params: {
        q: query,
        page: page,
        count: count
      }
    });
    return thread.data;
  } catch (e) {
    // TODO:
    throw e;
  }
};
