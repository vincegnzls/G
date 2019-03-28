import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Modal, Text, Image } from 'react-native'
import BackButton from '../../components/BackButton'
import styles from './styles'
import logo from '../../assets/icons/g-logo.png'

import { setVisibility } from './actions'

import Tag from './components/Tag'

class AddStatusModal extends Component {
    render() {
        return (
            <Modal
                visible={this.props.visibility}
                animationType="slide"
                transparent={false}
                onRequestClose={() => console.log('closed')}
            >
                <View style={styles.container}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <BackButton onPress={() => this.props.setVisibility(false)} />
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>I'm</Text>
                        <Image source={logo} style={styles.imageLogo} />
                        <Text style={styles.headerText}>to</Text>
                    </View>
                    <View style={styles.selectedTagsContainer}>
                        <Tag color="#E68F4C" text="EAT" />
                        <Tag color="#C474CE" text="DRINK" />
                        <Tag color="#844DE5" text="MOVIE" />
                    </View>
                </View>
            </Modal>
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
)(AddStatusModal)
