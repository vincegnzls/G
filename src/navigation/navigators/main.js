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
import Invites from '../../features/invites'
import About from '../../features/drawer/containers/about'
import DrawerButton from '../../features/drawer/components/DrawerButton'

import plansLogo from '../../assets/icons/navigator/plans.png'
import plansSelectedLogo from '../../assets/icons/navigator/plans-selected.png'
import planStyles from '../../features/plans/styles'

import { Fonts } from '../../utils/fonts'

const headerLogo = require('../../assets/icons/g-logo.png')

const headerImage = (
    <Image
        source={headerLogo}
        style={{ width: responsiveWidth(15), height: responsiveWidth(15) }}
    />
)

const PlansTabNav = createMaterialTopTabNavigator(
    {
        Plans: { screen: Plans },
        Invites: { screen: Invites },
    },
    {
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#ffffff',
                paddingBottom: 5,
                paddingTop: 5,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            labelStyle: {
                fontFamily: Fonts.MuliBold,
                color: '#6B6B6B',
            },
            indicatorStyle: {
                backgroundColor: '#9663EF',
            },
            pressColor: '#6B6B6B',
            showLabel: true,
        },
    }
)

PlansTabNav.navigationOptions = {
    tabBarIcon: ({ focused }) =>
        focused ? (
            <Image source={plansSelectedLogo} style={planStyles.plansLogo} />
        ) : (
            <Image source={plansLogo} style={planStyles.plansLogo} />
        ),
}

const MainTabNav = createMaterialTopTabNavigator(
    {
        [screenNames.FRIENDS]: { screen: Friends },
        [screenNames.HOME]: { screen: Home },
        [screenNames.PLANS]: { screen: PlansTabNav },
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
            headerLeft: <DrawerButton />,
        },
        headerLayoutPreset: 'center',
    }
)

const AboutStackNav = createStackNavigator(
    {
        [screenNames.ABOUT]: { screen: About },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
                marginBottom: 10,
                marginTop: 10,
            },
            headerTitle: 'CREATE A PLAN',
        },
        headerLayoutPreset: 'center',
    }
)

const MainDrawerNav = createDrawerNavigator(
    {
        Home: { screen: MainStackNav },
        About: { screen: AboutStackNav },
    },
    {
        contentOptions: {
            items: ['MAIN', 'ABOUT'],
        },
    }
)

export default MainDrawerNav
