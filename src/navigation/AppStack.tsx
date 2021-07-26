import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {AppStackParams} from '@types';

const {Navigator, Screen} = createStackNavigator<AppStackParams>();

function AppNavigator() {
  return (
    <Navigator initialRouteName='Home' headerMode='screen' mode="modal">
      {/* <Screen
        component={Home}
        name="Home"
      /> */}
    </Navigator>
  );
}


export default AppNavigator;