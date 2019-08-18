import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import * as screenNames from '../../../../navigation/screenNames'
import Tag from '../Tag'

import NavigationService from '../../../../navigation/service'

const TopTag = props => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.labelText}>Most friends are G to</Text>
                <Tag
                    text="EAT"
                    color="#E68F4C"
                    onPress={() => NavigationService.navigate(screenNames.CREATE_PLAN)}
                    containerStyles={styles.tagContainer}
                />
            </View>
        </View>
    )
}

export default TopTag
