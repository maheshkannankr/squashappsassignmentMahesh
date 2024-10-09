/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import * as rn from 'react-native';

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
import {hp, wp} from '../../utils/dimension';
import useBackHandler from '../../utils/backbuttonhandler';
import CategoryScreen from '../categories/categories';
import RankingScreen from '../ranking/ranking';
import ProfileScreen from '../profile/profile';
import {colors, fontfamily} from '../../themes';

const Tab = createBottomTabNavigator();

const TabButton = props => {
  const {item, onPress, accessibilityState, isDarkMode, navigation} = props;
  const focused = accessibilityState.selected;
  return (
    <rn.TouchableOpacity
      style={[
        styles.tabItemContainer,
        {
          backgroundColor: focused ? colors.themePrimary : isDarkMode,
          flex: focused ? 1.5 : 1,
        },
      ]}
      onPress={() => {
        navigation.navigate(item.route);
        onPress();
      }}>
      {focused ? item.activeIcon : item.inactiveIcon}
      {focused && (
        <rn.Text style={styles.tabItemLabelText}>{item.label}</rn.Text>
      )}
    </rn.TouchableOpacity>
  );
};

const TabNavigation = ({navigation, props}) => {
  useBackHandler();

  const isDarkMode = rn.useColorScheme() === 'dark';

  const DrawerMenuArray = [
    {
      route: 'homeScreen',
      label: 'Home',
      component: HomeScreen,
      activeIcon: <HomeActiveIcon />,
      inactiveIcon: (
        <HomeInActiveIcon color={isDarkMode ? colors.white : colors.black} />
      ),
    },
    {
      route: 'categoryScreen',
      label: 'Category',
      component: CategoryScreen,
      activeIcon: <CategoryActiveIcon />,
      inactiveIcon: (
        <CategoryInActiveIcon
          color={isDarkMode ? colors.white : colors.black}
        />
      ),
    },
    {
      route: 'rankingScreen',
      label: 'Ranking',
      component: RankingScreen,
      activeIcon: <RankingActiveIcon />,
      inactiveIcon: (
        <RankingInActiveIcon color={isDarkMode ? colors.white : colors.black} />
      ),
    },
    {
      route: 'profileScreen',
      label: 'Profile',
      component: ProfileScreen,
      activeIcon: <ProfileActiveIcon />,
      inactiveIcon: (
        <ProfileInActiveIcon color={isDarkMode ? colors.white : colors.black} />
      ),
    },
  ];

  return (
    <Tab.Navigator
      backBehavior="history"
      sceneContainerStyle={{
        backgroundColor: isDarkMode ? colors.black : colors.white,
      }}
      screenOptions={{
        headerShown: false,
        animation: 'none',
        tabBarStyle: {
          height: wp(50),
          position: 'absolute',
          right: 10,
          left: 10,
          bottom: 10,
          borderRadius: wp(10),
          backgroundColor: isDarkMode ? colors.black : colors.white,
          borderTopWidth: 0,
        },
      }}
      initialRouteName="homeScreen">
      {DrawerMenuArray.map((tabItem, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tabItem.label}
            component={tabItem.component}
            options={{
              tabBarIcon: ({focused}) =>
                focused ? tabItem.activeIcon : tabItem.inactiveIcon,
              tabBarShowLabel: false,
              tabBarButton: props => (
                <TabButton {...props} item={tabItem} navigation={navigation} />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
const styles = rn.StyleSheet.create({
  tabItemContainer: {
    gap: hp(2),
    padding: wp(5),
    padddingHorizontal: wp(10),
    margin: wp(5),
    borderRadius: wp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabItemLabelText: {
    fontFamily: fontfamily.fSemiBold,
    color: colors.white,
  },
});
export default TabNavigation;
