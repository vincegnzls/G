import { createStackNavigator } from 'react-navigation'
import Login from '../../features/auth'
import * as screenNames from '../screenNames'

export default createStackNavigator(
    {
        [screenNames.LOGIN]: { screen: Login },
    },
    {
        headerMode: 'none',
        initialRouteName: screenNames.LOGIN,
    }
)
