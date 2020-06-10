import {createReducer, createRequestHandlers} from '../../helpers/reduxHelpers';
import {types, NAME} from './actions';

export {NAME};
export const handlers = {
  ...createRequestHandlers(types.SIGN_IN),
};
const initialState = {
  fetching: false,
  data: '',
};
export default createReducer(initialState, handlers);
