import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import * as screenNames from '../../../../navigation/screen_names'

import { setVisibility } from '../../../../modals/AddStatusModal/actions'

class AddStatus extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.labelText}>Watcha wanna do today?</Text>
                    <TouchableOpacity
                        style={styles.addButton}
                        onPress={() => this.props.setVisibility(true)}
                    >
                        <Text style={styles.buttonText}>ADD</Text>
                    </TouchableOpacity>
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
)(AddStatus)
