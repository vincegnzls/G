import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import NavigationService from '../../../../navigation/service'

const DrawerButton = props => {
    const onDrawerPress = () => {
        NavigationService.toggleDrawer()
    }

    return <TouchableOpacity style={styles.drawerButton} onPress={onDrawerPress} />
}

export default DrawerButton
