import { Endpoints } from '../constant/index';
import { customFetch } from '../helpers/index';

export const getSearch = async(params, data) => {

  const setSearch = cats => {
    return cats;
  };

  try {
    const response = await customFetch(`${Endpoints.param.search}`, 'GET', data, false);

    if (response.data) {
      response.data = setSearch(response.data);
    } else {
      response.data = [];
    }
    return response;
  } catch (error) {
    throw error;
  }
};