import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import * as screenNames from '../../screen_names'

import Settings from '../../../features/drawer/containers/settings'
import About from '../../../features/drawer/containers/about'

import { MainStackNav } from '../main'
import DrawerContent from './components/DrawerContent'

const SettingsStackNav = createStackNavigator(
    {
        [screenNames.SETTINGS]: { screen: Settings },
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
            headerTitle: 'SETTINGS',
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
            headerTitle: 'ABOUT',
        },
        headerLayoutPreset: 'center',
    }
)

const MainDrawerNav = createDrawerNavigator(
    {
        Home: { screen: MainStackNav },
        Settings: { screen: SettingsStackNav },
        About: { screen: AboutStackNav },
    },
    {
        contentComponent: DrawerContent,
    }
)

export default MainDrawerNav
