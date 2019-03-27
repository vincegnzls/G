import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import friendsLogo from '../../assets/icons/navigator/friends.png'
import friendsSelectedLogo from '../../assets/icons/navigator/friends-selected.png'

class Friends extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) =>
            focused ? (
                <Image source={friendsSelectedLogo} style={styles.friendsLogo} />
            ) : (
                <Image source={friendsLogo} style={styles.friendsLogo} />
            ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>People</Text>
            </View>
        )
    }
}

export default Friends
