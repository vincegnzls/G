import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as screenNames from '../../../../navigation/screen_names'
import Tag from '../../../../modals/AddStatusModal/components/Tag'

import { setVisibility } from '../../../../modals/AddStatusModal/actions'

class TopTag extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.labelText}>Most friends are G to</Text>
                    <Tag text="EAT" color="#E68F4C" />
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    visibility: state.addStatusModal.visibility,
})

const mapDispatchToProps = dispatch => {
    return {
        setVisibility: visibility => dispatch(setVisibility(visibility)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopTag)
