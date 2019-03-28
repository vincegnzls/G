import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

class Tag extends Component {
    render() {
        return (
            <TouchableOpacity style={[styles.tag, { backgroundColor: this.props.color }]}>
                <Text style={[styles.tagText]}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default Tag
