import React, { Component } from 'react'
import { TouchableOpacity, Text, View, Platform } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import styles from './styles'

class Tag extends Component {
    onPress = () => {
        this.props.onPress({ text: this.props.text, color: this.props.color, selected: true })
    }

    onPressSelected = () => {
        this.props.onPress(this.props.index)
    }

    renderTag = () => {
        let currentOnPress

        if (this.props.customOnPress) {
            currentOnPress = this.props.customOnPress
        } else if (this.props.onPress) {
            currentOnPress = this.props.selected ? this.onPressSelected : this.onPress
        }

        return (
            <TouchableOpacity
                style={[
                    styles.tag,
                    {
                        backgroundColor: this.props.color,
                        marginLeft: 10,
                        marginTop: responsiveHeight(1.5),
                    },
                ]}
                onPress={currentOnPress}
            >
                <View
                    style={[
                        {
                            backgroundColor: this.props.color,
                            paddingLeft: 15,
                            paddingRight: this.props.borderColor ? 15 : 10,
                            paddingBottom: 2,
                            paddingTop: 2,
                            borderTopLeftRadius: 15,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: this.props.count ? 0 : 15,
                            borderTopRightRadius: this.props.count ? 0 : 15,
                            borderColor: this.props.borderColor ? this.props.borderColor : null,
                            borderWidth: this.props.borderColor ? 0.5 : 0,
                        },
                    ]}
                >
                    <Text
                        style={[
                            styles.tagText,
                            { color: this.props.fontColor ? this.props.fontColor : '#ffffff' },
                        ]}
                    >
                        {this.props.text}
                    </Text>
                </View>
                <View
                    style={{
                        paddingRight: this.props.count ? 10 : 5,
                        paddingBottom: 2,
                        paddingTop: 4,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                    }}
                >
                    <Text style={styles.countText}>{this.props.count}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSelectedTag = () => {
        let currentOnPress

        if (this.props.customOnPress) {
            currentOnPress = this.props.customOnPress
        } else if (this.props.onPress) {
            currentOnPress = this.props.selected ? this.onPressSelected : this.onPress
        }

        return (
            <TouchableOpacity
                style={[styles.selectedTag, { backgroundColor: this.props.color }]}
                onPress={currentOnPress}
            >
                <View
                    style={[styles.selectedTagTextContainer, { backgroundColor: this.props.color }]}
                >
                    <Text style={[styles.tagText]}>{this.props.text}</Text>
                </View>
                <View style={styles.xContainer}>
                    <Text style={styles.xText}>x</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return this.props.selected ? this.renderSelectedTag() : this.renderTag()
    }
}

export default Tag
