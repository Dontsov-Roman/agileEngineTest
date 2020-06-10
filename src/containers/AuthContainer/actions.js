import {signIn as apiSignIn} from '../../services/API';

import {
  createRequestAction,
  createRequestTypes,
} from '../../helpers/reduxHelpers';

export const NAME = 'auth';

export const types = {
  SIGN_IN: createRequestTypes(`${NAME}_SIGN_IN`),
};
const simpleActions = {
  signIn: createRequestAction(types.SIGN_IN),
};
const signIn = () => async (dispatch, getState) => {
  dispatch(simpleActions.signIn.request());
  try {
    const token = await apiSignIn();
    if (token) {
      dispatch(simpleActions.signIn.success(token));
    } else {
      dispatch(simpleActions.signIn.failure('undefined'));
    }
  } catch (e) {
    dispatch(simpleActions.signIn.failure(e));
  }
};
export default {
  signIn,
};
