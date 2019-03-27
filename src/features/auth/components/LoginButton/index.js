import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import fbLogo from '../../../../assets/icons/fb-logo.png'

const loginButton = props => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <View style={styles.fbSpan}>
            <Image source={fbLogo} style={styles.fbLogo} />
        </View>
        <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>SIGN IN WITH FACEBOOK</Text>
        </View>
    </TouchableOpacity>
)

export default loginButton
