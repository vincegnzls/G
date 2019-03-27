import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createRootNavigator } from './navigators'
import NavigationService from './service'

class ApplicationNavigatorContainer extends Component {
    componentDidMount() {
        setTimeout(() => {
            NavigationService.navigate('HOME')
        }, 0.1)
    }

    render() {
        const Navigator = createRootNavigator()

        return (
            <Navigator
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef)
                }}
            />
        )
    }
}

export default ApplicationNavigatorContainer
