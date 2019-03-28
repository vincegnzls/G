import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppNavigator from './src/navigation'
import { store } from './src/redux/store'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        )
    }
}
