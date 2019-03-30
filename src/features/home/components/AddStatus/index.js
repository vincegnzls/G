import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as screenNames from '../../../../navigation/screen_names'
import NavigationService from '../../../../navigation/service'

class AddStatus extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.labelText}>Watcha wanna do today?</Text>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => NavigationService.navigate(screenNames.ADD_STATUS)}
                    >
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default AddStatus
