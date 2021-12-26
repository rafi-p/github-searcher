/* eslint-disable no-undef */
import { Octokit } from '@octokit/core';
import { LocalStorage } from '../helpers/index';

const octokit = new Octokit({ auth: 'personal-access-token123' });

const customFetch = async(url, method, data) => {
  try {
    const response = await octokit.request(`${method} ${url}`, {
      q: data
    });

    switch (response.status) {
      case 500:
        break;

      case 404:
        return await response;

      case 403:
        break;
      case 401:
        return await response;

      case 400:
        return await response;

      default:
        return await response;
    }
  } catch (err) {
    throw err;
  }
};
export default customFetch;
