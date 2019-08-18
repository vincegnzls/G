/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import NavigationService from '../../navigation/service'
import styles from './styles'
import logo from '../../assets/icons/g-logo.png'
import LoginButton from './components/LoginButton'

import * as screenNames from '../../navigation/screenNames'

const Login = props => {
    const onLogin = () => {
        NavigationService.navigate(screenNames.MAIN)
    }

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logoImage} />
            <Text style={styles.title}>Are you G? 👋</Text>
            <Text style={styles.subTitle}>Get out more.</Text>
            <LoginButton onPress={onLogin} />
        </View>
    )
}

export default Login
