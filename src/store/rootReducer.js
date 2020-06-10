import {combineReducers} from 'redux';

import homeReducer from '../containers/HomeContainer/reducer';
import authReducer, {NAME} from '../containers/AuthContainer/reducer';
import detailViewReducer from '../containers/DetailViewContainer/reducer';

export default combineReducers({
  [NAME]: authReducer,
  homeReducer,
  detailViewReducer,
});
