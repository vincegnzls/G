import React, { Component } from 'react'
import { View, Image, ScrollView, Text } from 'react-native'
import styles from './styles'

import Post from '../Post'

class UserPosts extends Component {
    render() {
        return (
            <ScrollView style={styles.list}>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </ScrollView>
        )
    }
}

export default UserPosts
