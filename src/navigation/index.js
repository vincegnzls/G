import React, { Component } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-navigation'
import { connect } from 'react-redux'
import { createRootNavigator } from './navigators'
import NavigationService from './service'

class ApplicationNavigatorContainer extends Component {
    render() {
        const Navigator = createRootNavigator()

        return (
            <SafeAreaView
                style={{ flex: 1, backgroundColor: 'ffffff' }}
                forceInset={{ top: 'never' }}
            >
                <View style={{ width: '100%', height: '100%' }}>
                    <Navigator
                        ref={navigatorRef => {
                            NavigationService.setTopLevelNavigator(navigatorRef)
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default ApplicationNavigatorContainer
