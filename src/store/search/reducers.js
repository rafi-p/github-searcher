import actionTypes from './actionTypes';
import { LocalStorage } from '../../helpers';

const initialState = {
  data: [],
  loadingList: false,
};

const setSearchReq = state => {

  return {
    ...state,
    loadingList: true
  };
};

const setSearchSuccess = (state, payload) => {
  return {
    ...state,
    data: payload.data,
    loadingList: false
  };
};

const SearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SEARCH_REQUEST:
      return setSearchReq(state);
    case actionTypes.GET_SEARCH_SUCCESS:
      return setSearchSuccess(state, action.payload);
    default:
      return state;
  }
};

export default SearchReducer;
