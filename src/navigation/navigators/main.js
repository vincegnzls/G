import React from 'react'
import { Platform, Image } from 'react-native'
import {
    createMaterialTopTabNavigator,
    createStackNavigator,
    createDrawerNavigator,
} from 'react-navigation'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import * as screenNames from '../screen_names'
import Home from '../../features/home'
import Friends from '../../features/friends'
import Plans from '../../features/plans'
import About from '../../features/drawer/containers/about'

const headerLogo = require('../../assets/icons/g-logo.png')

const headerImage = (
    <Image
        source={headerLogo}
        style={{ width: responsiveWidth(15), height: responsiveWidth(15) }}
    />
)

const MainTabNav = createMaterialTopTabNavigator(
    {
        [screenNames.FRIENDS]: { screen: Friends },
        [screenNames.HOME]: { screen: Home },
        [screenNames.PLANS]: { screen: Plans },
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#ffffff',
                elevation: 25,
                shadowOpacity: 0.2,
                shadowRadius: 5,
                shadowColor: '#000000',
                shadowOffset: { height: 0, width: 0 },
                paddingBottom: 10,
                paddingTop: 10,
            },
            indicatorStyle: {
                opacity: 0,
            },
            showLabel: false,
            showIcon: true,
            pressColor: '#6B6B6B',
        },
        tabBarPosition: 'bottom',
    }
)

const MainStackNav = createStackNavigator(
    {
        [screenNames.MAIN_TAB]: { screen: MainTabNav },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 5,
                shadowOpacity: 0.2,
                shadowRadius: 5,
                shadowColor: '#000000',
                shadowOffset: { height: 0, width: 0 },
                height: Platform.OS === 'ios' ? responsiveHeight(7) : responsiveHeight(9),
                paddingBottom: Platform.OS === 'ios' ? responsiveHeight(1.5) : 0,
            },
            headerTitle: headerImage,
        },
        headerLayoutPreset: 'center',
    }
)

const MainDrawerNav = createDrawerNavigator(
    {
        [screenNames.MAIN_TAB]: { screen: MainStackNav },
        [screenNames.ABOUT]: { screen: About },
    },
    {
        contentOptions: {
            items: [screenNames.ABOUT],
        },
    }
)

export default MainDrawerNav
