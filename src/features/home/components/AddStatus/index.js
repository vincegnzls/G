import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as screenNames from '../../../../navigation/screen_names'
import NavigationService from '../../../../navigation/service'

const AddStatus = props => {
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

export default AddStatus
