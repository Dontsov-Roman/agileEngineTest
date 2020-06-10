import {createReducer, createRequestHandlers} from '../../helpers/reduxHelpers';
import {types} from './actions';

export const handlers = {
  ...createRequestHandlers(types.GET),
};
const initialState = {
  fetching: false,
  data: {},
  page: 1,
};
export default createReducer(initialState, handlers);
