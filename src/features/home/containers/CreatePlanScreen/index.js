import React, { useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import NavigationService from '../../../../navigation/service'
import BackButton from '../../../../components/BackButton'
import BigTag from '../../components/BigTag'

import styles from './styles'
import * as screenNames from '../../../../navigation/screenNames'

const CreatePlanScreen = props => {
    useEffect(() => {}, [])

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header1}>
                    <BackButton onPress={() => NavigationService.navigate(screenNames.HOME)} />
                </View>
                <View style={styles.header2}>
                    <Text style={styles.headerText}>CREATE A PLAN</Text>
                </View>
                <View style={styles.header3} />
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.tagContainer}>
                    <BigTag color="#E68F4C" text="EAT" />
                </View>
                <View style={styles.gTitleContainer}>
                    <Text style={styles.gForText}>G for</Text>
                </View>
                <View style={styles.gForContainer}>
                    <TextInput style={styles.gForTextInput} placeholder="What do you wanna do?" />
                </View>
                <View style={styles.gTitleContainer}>
                    <Text style={styles.gForText}>at</Text>
                </View>
                <View style={styles.gForContainer}>
                    <TextInput style={styles.gForTextInput} placeholder="4:00" />
                </View>
                <View style={styles.gTitleContainer}>
                    <Text style={styles.gForText}>in</Text>
                </View>
                <View style={styles.gForContainer}>
                    <TextInput style={styles.gForTextInput} placeholder="Gino's Brick Oven Pizza" />
                </View>
                <View style={styles.gTitleContainer}>
                    <Text style={styles.gForText}>with</Text>
                </View>
                <View style={styles.gForContainer}>
                    <TextInput style={styles.gForTextInput} placeholder="4:00" />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={null}>
                    <Text style={styles.saveText}>CREATE PLAN 🎉</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CreatePlanScreen
