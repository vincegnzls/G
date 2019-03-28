import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'

import AddStatus from './components/AddStatus'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddStatus />
            </View>
        )
    }
}

export default Home
