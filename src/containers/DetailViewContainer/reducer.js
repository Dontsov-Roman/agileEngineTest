import {
  createReducer,
  createRequestHandlers,
  createSetValueHandler,
} from '../../helpers/reduxHelpers';
import {types} from './actions';

export const handlers = {
  ...createRequestHandlers(types.GET),
  ...createSetValueHandler(types.GET),
};
const initialState = {
  fetching: false,
  data: {},
};
export default createReducer(initialState, handlers);
