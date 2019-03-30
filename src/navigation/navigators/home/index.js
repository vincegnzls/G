import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import * as screenNames from '../../screen_names'

import homeLogo from '../../../assets/icons/navigator/home.png'
import homeSelectedLogo from '../../../assets/icons/navigator/home-selected.png'
import homeStyles from '../../../features/home/styles'

import Home from '../../../features/home'

export const HomeStack = createStackNavigator(
    {
        [screenNames.HOME]: { screen: Home },
    },
    {
        headerMode: 'none',
    }
)

HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) =>
        focused ? (
            <Image source={homeSelectedLogo} style={homeStyles.homeLogo} />
        ) : (
            <Image source={homeLogo} style={homeStyles.homeLogo} />
        ),
}

export default HomeStack
