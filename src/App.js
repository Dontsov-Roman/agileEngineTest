/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {NativeRouter as Router, Route} from 'react-router-native';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import Auth from './containers/AuthContainer/index';

import Home from './containers/HomeContainer/index';
import DetailView from './containers/DetailViewContainer/index';

// iPhone X safe area (top and bottom color)
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export interface Props {}
export interface State {
  store: Object;
}
export default class Setup extends React.Component<Props, State> {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Provider store={configureStore()}>
          <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={DetailView} />
          </Router>
        </Provider>
      </SafeAreaView>
    );
  }
}
