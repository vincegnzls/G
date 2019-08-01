import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const TagSection = props => {
    return (
        <View>
            <Text style={styles.sectionTitle}>{props.title}</Text>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: 5,
                }}
            >
                <View style={styles.tagsContentContainer}>{props.tags}</View>
            </View>
        </View>
    )
}

export default TagSection
