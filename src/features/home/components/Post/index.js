import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import Tag from '../Tag'

const Post = props => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.imageContainer} />
                <Text style={styles.distanceText}>20m away</Text>
            </View>
            <View style={styles.midContainer}>
                <Text style={styles.nameText}>Vince Gonzales</Text>
                <View style={styles.tagsContainer}>
                    <Tag
                        color="#ffffff"
                        text="EAT"
                        fontColor="#6B6B6B"
                        borderColor="#6B6B6B"
                        containerStyles={styles.tagContainer}
                    />
                    <Tag
                        color="#ffffff"
                        text="SLEEP"
                        fontColor="#6B6B6B"
                        borderColor="#6B6B6B"
                        containerStyles={styles.tagContainer}
                    />
                    <Tag
                        color="#ffffff"
                        text="EAT"
                        fontColor="#6B6B6B"
                        borderColor="#6B6B6B"
                        containerStyles={styles.tagContainer}
                    />
                </View>
                <Text style={styles.detailsText}>HOHOL g?</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.time}>15m</Text>
            </View>
        </View>
    )
}

export default Post
