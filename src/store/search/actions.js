/* eslint-disable no-undef */
import * as searchServices from '../../services/search';
import { LocalStorage } from '../../helpers';

import actionTypes from './actionTypes';

export const getSearchRequest = () => ({
  type: actionTypes.GET_SEARCH_REQUEST,
});

export const getSearchSuccess = payload => ({
  type: actionTypes.GET_SEARCH_SUCCESS,
  payload: { ...payload },
});

export const getSearch = (dispatch, getState) => (params, body) => {
  return new Promise(async(resolve, reject) => {
    dispatch(getSearchRequest());
    const apiFetch = await searchServices.getSearch(params, body);

    const { status, data, statusText, stat_msg } = apiFetch;

    if (status === 200) {
      resolve(dispatch(getSearchSuccess({ data: data })));
    } else {
      reject(stat_msg);
    }
  });
};