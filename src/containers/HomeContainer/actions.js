import {getPictures} from '../../services/API';
import {
  createRequestAction,
  createRequestTypes,
} from '../../helpers/reduxHelpers';

export const NAME = 'homeReducer';

export const types = {
  GET: createRequestTypes(`${NAME}_GET`),
};
const simpleActions = {
  get: createRequestAction(types.GET),
};
export function fetchPictures(page: number = 1) {
  return async (dispatch, getState) => {
    dispatch(simpleActions.get.request());
    try {
      const data = await getPictures(page);
      if (data) {
        dispatch(simpleActions.get.success(data));
      } else {
        dispatch(simpleActions.get.failure('no data'));
      }
    } catch (e) {
      dispatch(simpleActions.get.failure(e));
    }
  };
}
export default {
  ...simpleActions,
  fetchPictures,
};
