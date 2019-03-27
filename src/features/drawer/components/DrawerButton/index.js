import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import NavigationService from '../../../../navigation/service'

class DrawerButton extends Component {
    onDrawerPress = () => {
        NavigationService.toggleDrawer()
    }

    render() {
        return <TouchableOpacity style={styles.drawerButton} onPress={this.onDrawerPress} />
    }
}

export default DrawerButton
