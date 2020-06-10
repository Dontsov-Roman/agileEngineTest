import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import withOnMount from '../../hocs/withOnMount';
import withLoader from '../../hocs/withLoader';
import actions from './actions';

const AuthContainer = ({children}) => <View>{children}</View>;
export default connect(
  ({auth: {fetching}}) => ({fetching}),
  (dispatch) => ({onMount: () => dispatch(actions.signIn())}),
)(withOnMount(withLoader(AuthContainer)));
