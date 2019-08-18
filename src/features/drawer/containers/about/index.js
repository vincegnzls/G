import { View, Text } from 'react-native'
import React, { Component } from 'react'
import BackButton from '../../../../components/BackButton'
import styles from './styles'

class About extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <BackButton
                    onPress={() => {
                        navigation.navigate('HOME')
                    }}
                />
            ),
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>About</Text>
            </View>
        )
    }
}

export default About
