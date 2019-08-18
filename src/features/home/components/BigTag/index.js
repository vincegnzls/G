import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'

const Tag = props => {
    const onPress = () => {}

    return (
        <TouchableOpacity style={[styles.tag, { backgroundColor: props.color }]} onPress={onPress}>
            <Text style={[styles.tagText]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default Tag
