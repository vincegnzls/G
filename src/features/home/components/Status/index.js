import React from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import * as actions from '../../actions'
import * as screenNames from '../../../../navigation/screen_names'
import NavigationService from '../../../../navigation/service'

import editIcon from '../../../../assets/icons/edit.png'

import Tag from '../Tag'

const Status = props => {
    const renderTags = () => {
        return props.statusTags.map((tag, key) => {
            const id = key + 1

            return (
                <Tag
                    key={id}
                    color={tag.color}
                    text={tag.text}
                    containerStyles={styles.tagContainer}
                />
            )
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.tagsContainer}>{renderTags()}</View>
                <Text style={styles.detailText}>Anyone g to drink Lan kwai tonight?</Text>
            </View>
            <View style={styles.rightContainer}>
                <TouchableOpacity
                    onPress={() => NavigationService.navigate(screenNames.ADD_STATUS)}
                >
                    <Image source={editIcon} style={styles.editImage} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = state => ({
    statusTags: state.homeData.statusTags,
})

const mapDispatchToProps = dispatch => {
    return {
        updateStatusTags: statusTags => dispatch(actions.updateStatusTags(statusTags)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Status)
