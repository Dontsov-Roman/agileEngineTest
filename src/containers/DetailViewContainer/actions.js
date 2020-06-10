import {getPictureDetails} from '../../services/API';
import {
  createRequestAction,
  createRequestTypes,
} from '../../helpers/reduxHelpers';

export const NAME = 'detailViewReducer';

export const types = {
  GET: createRequestTypes(`${NAME}_GET`),
};
const simpleActions = {
  get: createRequestAction(types.GET),
};

export function fetchPictureDetails(id: number) {
  return async (dispatch) => {
    dispatch(simpleActions.get.request());
    try {
      const value = await getPictureDetails(id);
      if (value) {
        dispatch(simpleActions.get.success({id, value}));
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
  fetchPictureDetails,
};
