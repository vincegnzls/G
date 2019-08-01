import React from 'react'
import { ScrollView } from 'react-native'
import styles from './styles'

import Post from '../Post'

const UserPosts = props => {
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

export default UserPosts
