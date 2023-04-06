import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyGarageStackScreens from '../mainStack/myGarageStack';

import { History, Profile } from '../../screens/index';

type MainStackParams = {
  MyGarage: undefined;
  History: undefined;
  Profile: undefined;
};

const BottomTab = createBottomTabNavigator<MainStackParams>();


const MainStackScreens = (): JSX.Element => (
  <BottomTab.Navigator screenOptions={{
    headerShown: false
  }}>
    <BottomTab.Screen name="MyGarage" component={MyGarageStackScreens} />
    <BottomTab.Screen name="History" component={History} />
    <BottomTab.Screen name="Profile" component={Profile} />
  </BottomTab.Navigator>
);

export default MainStackScreens