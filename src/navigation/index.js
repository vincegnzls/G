import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createRootNavigator } from './navigators'
import NavigationService from './service'

import AddStatusModal from '../modals/AddStatusModal'

class ApplicationNavigatorContainer extends Component {
    render() {
        const Navigator = createRootNavigator()

        return (
            <View style={{ width: '100%', height: '100%' }}>
                <Navigator
                    ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef)
                    }}
                />
                <AddStatusModal />
            </View>
        )
    }
}

export default ApplicationNavigatorContainer
