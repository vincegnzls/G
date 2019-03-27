import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './styles'
import backIcon from '../../assets/icons/back-icon.png'

const backButton = props => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Image source={backIcon} style={styles.backIcon} />
        <Text style={styles.backText}>BACK</Text>
    </TouchableOpacity>
)

export default backButton
