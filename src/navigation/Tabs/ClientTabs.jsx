import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ClientHomeScreen} from '~pages/client';
import {
  CategoryBold,
  CategoryLight,
  DocumentBold,
  DocumentLight,
  ProfileBold,
  ProfileLight,
} from '~assets';

const Tabs = createBottomTabNavigator();

const ClientTabs = () => {
  return (
    <Tabs.Navigator
      initialRouteName="HomeClient"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let Icons;

          if (route.name === 'HomeClient') {
            Icons = focused ? CategoryBold : CategoryLight;
          } else if (route.name === 'HistoryClient') {
            Icons = focused ? DocumentBold : DocumentLight;
          } else if (route.name === 'ProfileClient') {
            Icons = focused ? ProfileBold : ProfileLight;
          }
          return (
            <Image
              source={Icons}
              style={{
                width: 30,
                height: 30,
                tintColor: color,
              }}
              resizeMode="contain"
            />
          )
        },
        tabBarActiveTintColor: "black",
        tabBarShowLabel: false,
        tabBarStyle: s.tabBarStyle,
        headerShown: false
      })}>
      <Tabs.Screen name="HomeClient" component={ClientHomeScreen} />
      <Tabs.Screen name="HistoryClient" component={ClientHomeScreen} />
      <Tabs.Screen name="ProfileClient" component={ClientHomeScreen} />
    </Tabs.Navigator>
  );
};

export default ClientTabs;

const s = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    margin: 20,
    borderRadius: 20,
  }
})