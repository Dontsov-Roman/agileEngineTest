import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

const withBackButton = (Component) => ({history, ...props}) => (
  <View style={{height: '100%'}}>
    <Component {...props} history={history} />
    <View style={{position: 'absolute', top: 0, left: 20}}>
      <TouchableOpacity onPress={history.goBack}>
        <Text style={{color: 'white', fontSize: 22}}>Back</Text>
      </TouchableOpacity>
    </View>
  </View>
);
export default withBackButton;
