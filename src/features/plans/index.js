import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import plansLogo from '../../assets/icons/navigator/plans.png'
import plansSelectedLogo from '../../assets/icons/navigator/plans-selected.png'

class Plans extends Component {
    static navigationOptions = {
        tabBarIcon: ({ focused }) =>
            focused ? (
                <Image source={plansSelectedLogo} style={styles.plansLogo} />
            ) : (
                <Image source={plansLogo} style={styles.plansLogo} />
            ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Plans</Text>
            </View>
        )
    }
}

export default Plans
