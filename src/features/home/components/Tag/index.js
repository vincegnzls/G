import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './styles'

const Tag = props => {
    const onPress = () => {
        props.onPress({ text: props.text, color: props.color, selected: true })
    }

    const onPressSelected = () => {
        props.onPress(props.index)
    }

    const renderTag = () => {
        let currentOnPress

        if (props.customOnPress) {
            currentOnPress = props.customOnPress
        } else if (props.onPress) {
            currentOnPress = props.selected ? onPressSelected : onPress
        }

        return (
            <TouchableOpacity
                style={[
                    styles.tag,
                    {
                        backgroundColor: props.color,
                    },
                    { ...props.containerStyles },
                ]}
                onPress={currentOnPress}
            >
                <View
                    style={[
                        {
                            backgroundColor: props.color,
                            paddingLeft: 15,
                            paddingRight: props.borderColor ? 15 : 10,
                            paddingBottom: 2,
                            paddingTop: 2,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: props.count ? 0 : 15,
                            borderTopRightRadius: props.count ? 0 : 15,
                            borderColor: props.borderColor ? props.borderColor : null,
                            borderWidth: props.borderColor ? 0.5 : 0,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.tagText,
                            { color: props.fontColor ? props.fontColor : '#ffffff' },
                        ]}
                    >
                        {props.text}
                    </Text>
                </View>
                <View
                    style={{
                        paddingRight: props.count ? 10 : 5,
                        paddingBottom: 2,
                        paddingTop: 4,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                    }}
                >
                    <Text style={styles.countText}>{props.count}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const renderSelectedTag = () => {
        let currentOnPress

        if (props.customOnPress) {
            currentOnPress = props.customOnPress
        } else if (props.onPress) {
            currentOnPress = props.selected ? onPressSelected : onPress
        }

        return (
            <TouchableOpacity
                style={[styles.selectedTag, { backgroundColor: props.color }]}
                onPress={currentOnPress}
            >
                <View style={[styles.selectedTagTextContainer, { backgroundColor: props.color }]}>
                    <Text style={[styles.tagText]}>{props.text}</Text>
                </View>
                <View style={styles.xContainer}>
                    <Text style={styles.xText}>x</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return props.selected ? renderSelectedTag() : renderTag()
}

export default Tag
