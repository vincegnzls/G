import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as screenNames from '../../../../navigation/screen_names'
import Tag from '../Tag'

import NavigationService from '../../../../navigation/service'

class TopTag extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.labelText}>Most friends are G to</Text>
                    <Tag
                        text="EAT"
                        color="#E68F4C"
                        onPress={() => NavigationService.navigate('STACK3')}
                    />
                </View>
            </View>
        )
    }
}

export default TopTag
