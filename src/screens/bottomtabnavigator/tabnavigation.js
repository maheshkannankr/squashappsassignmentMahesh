import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../homescreen/homescreen';

import {
  HomeInActiveIcon,
  HomeActiveIcon,
  CategoryActiveIcon,
  CategoryInActiveIcon,
  RankingActiveIcon,
  RankingInActiveIcon,
  ProfileActiveIcon,
  ProfileInActiveIcon,
} from '../../components/icons';
import {wp} from '../../utils/dimension';
import useBackHandler from '../../utils/backbuttonhandler';
import CategoryScreen from '../categories/categories';
import RankingScreen from '../ranking/ranking';
import ProfileScreen from '../profile/profile';

const Tab = createBottomTabNavigator();

const DrawerMenuArray = [
  {
    route: 'homeScreen',
    label: 'Home',
    component: HomeScreen,
    activeIcon: HomeActiveIcon,
    inactiveIcon: HomeInActiveIcon,
  },
  {
    route: 'categoryScreen',
    label: 'Category',
    component: CategoryScreen,
    activeIcon: CategoryActiveIcon,
    inactiveIcon: CategoryInActiveIcon,
  },
  {
    route: 'rankingScreen',
    label: 'Ranking',
    component: RankingScreen,
    activeIcon: RankingActiveIcon,
    inactiveIcon: RankingInActiveIcon,
  },
  {
    route: 'profileScreen',
    label: 'Profile',
    component: ProfileScreen,
    activeIcon: ProfileActiveIcon,
    inactiveIcon: ProfileInActiveIcon,
  },
];

const TabNavigation = ({navigation, props}) => {
  useBackHandler();
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName="homeScreen">
      {DrawerMenuArray.map((tabItem, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tabItem.label}
            component={tabItem.component}
            options={{
              tabBarIcon: tabItem.inactiveIcon,
              tabBarActiveBackgroundColor: '#ED03BF',
              tabBarShowLabel: false,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigation;
