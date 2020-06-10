/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeRouter as Router, Route} from 'react-router-native';
import AnimatedStack from 'react-router-native-animate-stack';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

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
            <AnimatedStack style={{height: '100%'}} swipeCancelSpeed={50}>
              <Route exact path="/" component={Home} />
              <Route path="/detail/:id" component={DetailView} />
            </AnimatedStack>
          </Router>
        </Provider>
      </SafeAreaView>
    );
  }
}
