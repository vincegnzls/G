import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import AuthNavigator from './authentication'
import MainNavigator from './drawer'
import * as screenNames from '../screen_names'

export const createRootNavigator = (signedIn = true) => {
    const switchNav = createSwitchNavigator(
        {
            [screenNames.AUTHENTICATION]: {
                screen: AuthNavigator,
            },
            [screenNames.MAIN]: {
                screen: MainNavigator,
            },
        },
        {
            headerMode: 'none',
            initialRouteName: signedIn ? screenNames.MAIN : screenNames.AUTHENTICATION,
        }
    )

    return createAppContainer(switchNav)
}
