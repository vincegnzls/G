import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import homeLogo from '../../assets/icons/navigator/home.png'
import homeSelectedLogo from '../../assets/icons/navigator/home-selected.png'

class Home extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) =>
            focused ? (
                <Image source={homeSelectedLogo} style={styles.homeLogo} />
            ) : (
                <Image source={homeLogo} style={styles.homeLogo} />
            ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home
