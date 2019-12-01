import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

import Tag from './components/Tag'

const Post = props => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    <View style={styles.imageContainer} />
                    {/* <Text style={styles.distanceText}>20m away</Text> */}
                </View>
                <View style={styles.midContainer}>
                    <Text style={styles.nameText}>Vince Gonzales</Text>
                    <Text style={styles.detailsText}>HOHOL g?</Text>
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.time}>15m</Text>
                    <Text style={styles.time}>5m away</Text>
                </View>
            </View>
            <View style={styles.tagsContainer}>
                <Tag text="EAT" />
                <Tag text="SLEEP" />
                <Tag text="EAT" />
            </View>
        </View>
    )
}

export default Post
