import * as Types from './actionTypes';
import { currentAPI } from '../api/currentAPI';

export const requestAPI = () => ({ type: Types.REQUEST_API });

export const getData = (data) => ({
  type: Types.GET_DATA,
  data: data
 });

export const requestError = (error) => ({
  type: Types.REQUEST_ERROR,
  error: error,
});

export const fetchAPI = () => async (dispatch) => {
    dispatch(requestAPI());
    try {
        const data = await currentAPI();
        return dispatch(getData(data));
    } catch (error) {
        return dispatch(requestError(error));
    }
};