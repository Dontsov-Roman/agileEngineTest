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
export function fetchPictures(newPage: number = 1) {
  return async (dispatch, getState) => {
    const {
      [NAME]: {
        data: {page, pictures},
      },
    } = getState();
    if (!pictures || page !== newPage) {
      dispatch(simpleActions.get.request());
      try {
        const data = await getPictures(newPage);
        if (data) {
          dispatch(simpleActions.get.success(data));
        } else {
          dispatch(simpleActions.get.failure('no data'));
        }
      } catch (e) {
        dispatch(simpleActions.get.failure(e));
      }
    }
  };
}
export default {
  ...simpleActions,
  fetchPictures,
};
