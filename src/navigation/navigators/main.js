import React from 'react'
import { Platform, Image } from 'react-native'
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import * as screenNames from '../screen_names'

import Home from '../../features/home'
import Friends from '../../features/friends'
import Plans from '../../features/plans'
import Invites from '../../features/invites'
import DrawerButton from '../../features/drawer/components/DrawerButton'

import plansLogo from '../../assets/icons/navigator/plans.png'
import plansSelectedLogo from '../../assets/icons/navigator/plans-selected.png'
import planStyles from '../../features/plans/styles'

import { Fonts } from '../../utils/fonts'

import { HomeStack } from './home'

const headerLogo = require('../../assets/icons/g-logo.png')

const headerImage = (
    <Image
        source={headerLogo}
        style={{
            width: responsiveWidth(12),
            height: responsiveWidth(12),
        }}
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
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            },
            labelStyle: {
                fontFamily: Fonts.MuliBold,
                fontSize: responsiveFontSize(1.8),
            },
            indicatorStyle: {
                backgroundColor: '#9663EF',
            },
            activeTintColor: '#9663EF',
            inactiveTintColor: '#6B6B6B',
            pressColor: '#6B6B6B',
            showLabel: true,
            upperCaseLabel: false,
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
        [screenNames.HOME_STACK]: { screen: HomeStack },
        [screenNames.FRIENDS]: { screen: Friends },
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
                paddingTop: responsiveHeight(0.5),
                paddingBottom: responsiveHeight(0.5),
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

export const MainStackNav = createStackNavigator(
    {
        [screenNames.MAIN_TAB]: { screen: MainTabNav },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#ffffff',
                elevation: 6,
                shadowOpacity: 0.2,
                shadowRadius: 5,
                shadowColor: '#000000',
                shadowOffset: { height: 0, width: 0 },
                borderBottomWidth: 0,
                height: responsiveHeight(8),
                paddingBottom: Platform.OS === 'ios' ? responsiveHeight(1.5) : 0,
                paddingTop: Platform.OS === 'ios' ? responsiveHeight(2) : 0,
            },
            headerTitle: headerImage,
            headerLeft: <DrawerButton />,
        },
        headerLayoutPreset: 'center',
    }
)
