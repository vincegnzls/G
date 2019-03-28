import React, { Component } from 'react'
import { View } from 'react-native'

import DrawerHeader from '../DrawerHeader'
import DrawerList from '../DrawerList'

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <DrawerHeader />
                <DrawerList />
            </View>
        )
    }
}
