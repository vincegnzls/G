import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import styles from './styles'

import AddStatus from './components/AddStatus'
import TopTag from './components/TopTag'
import UserPosts from './components/UserPosts'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddStatus />
                <TopTag />
                <UserPosts />
            </View>
        )
    }
}

export default Home
