require('babel-polyfill');

import axios from 'axios';
import querystring from 'querystring';
import user from './user';

exports.login = async(email = '', password = '') => {
  try {
    const result = await axios.post('api_v1/auth/login', querystring.stringify({
      email: email,
      password: password
    }));
    const response = result.data.response;
    if (response && response.token && response.user && response.user.user_id) {
      user.id = response.user.user_id;
      user.token = response.token;
    }
    return result.data;
  } catch (e) {
    // TODO:
    throw e;
  }
};