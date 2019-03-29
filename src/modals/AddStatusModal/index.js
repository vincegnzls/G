import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Modal, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import BackButton from '../../components/BackButton'
import styles from './styles'
import logo from '../../assets/icons/g-logo.png'

import { setVisibility } from './actions'

import Tag from './components/Tag'

class AddStatusModal extends Component {
    state = {
        selectedTags: [],
    }

    renderSelectedTags = () => {
        let tagComponents = this.state.selectedTags.map((item, key) => (
            <Tag
                color={item.color}
                text={item.text}
                key={key}
                index={key}
                selected={item.selected}
                onPress={this.removeTag}
            />
        ))

        if (!tagComponents.length) {
            tagComponents = (
                <Text style={[styles.sectionTitle, { marginTop: 10, marginLeft: 10 }]}>
                    Tap on tags below to select
                </Text>
            )
        }

        return tagComponents
    }

    addTag = tag => {
        const tags = [...this.state.selectedTags]

        tags.push(tag)

        this.setState({ selectedTags: tags })
    }

    removeTag = key => {
        const tags = [...this.state.selectedTags]

        tags.splice(key, 1)

        this.setState({ selectedTags: tags })
    }

    render() {
        return (
            <Modal
                visible={this.props.visibility}
                animationType="slide"
                transparent={false}
                onRequestClose={() => this.props.setVisibility(false)}
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
                    <View style={styles.selectedTagsContainer}>{this.renderSelectedTags()}</View>
                    <TextInput
                        style={styles.descriptionInput}
                        placeholder="Add a short description"
                        multiline
                    />

                    <View style={styles.tagSelectionContainer}>
                        <Text style={styles.tagSelectionTitle}>Select up to 3 Tags</Text>
                        <ScrollView style={styles.tagsScrollView}>
                            <Text style={styles.sectionTitle}>Suggestions</Text>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    marginTop: 5,
                                }}
                            >
                                <View style={styles.tagsContentContainer}>
                                    <Tag
                                        color="#E68F4C"
                                        text="EAT"
                                        onPress={this.addTag}
                                        count={14}
                                    />
                                    <Tag
                                        color="#C474CE"
                                        text="DRINK"
                                        onPress={this.addTag}
                                        count={10}
                                    />
                                    <Tag
                                        color="#844DE5"
                                        text="MOVIE"
                                        onPress={this.addTag}
                                        count={7}
                                    />
                                </View>
                            </View>
                            <Text style={styles.sectionTitle}>Food and Drink</Text>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    marginTop: 5,
                                }}
                            >
                                <View style={styles.tagsContentContainer}>
                                    <Tag color="#E68F4C" text="EAT" onPress={this.addTag} />
                                    <Tag color="#C474CE" text="DRINK" onPress={this.addTag} />
                                    <Tag color="#844DE5" text="MOVIE" onPress={this.addTag} />
                                    <Tag color="#E68F4C" text="EAT" onPress={this.addTag} />
                                    <Tag color="#C474CE" text="DRINK" onPress={this.addTag} />
                                    <Tag color="#844DE5" text="MOVIE" onPress={this.addTag} />
                                    <Tag color="#E68F4C" text="EAT" onPress={this.addTag} />
                                    <Tag color="#C474CE" text="DRINK" onPress={this.addTag} />
                                    <Tag color="#844DE5" text="MOVIE" onPress={this.addTag} />
                                </View>
                            </View>
                            <Text style={styles.sectionTitle}>Food and Drink</Text>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    marginTop: 5,
                                }}
                            >
                                <View style={styles.tagsContentContainer}>
                                    <Tag color="#E68F4C" text="EAT" onPress={this.addTag} />
                                    <Tag color="#C474CE" text="DRINK" onPress={this.addTag} />
                                    <Tag color="#844DE5" text="MOVIE" onPress={this.addTag} />
                                    <Tag color="#E68F4C" text="EAT" onPress={this.addTag} />
                                    <Tag color="#C474CE" text="DRINK" onPress={this.addTag} />
                                    <Tag color="#844DE5" text="MOVIE" onPress={this.addTag} />
                                    <Tag color="#E68F4C" text="EAT" onPress={this.addTag} />
                                    <Tag color="#C474CE" text="DRINK" onPress={this.addTag} />
                                    <Tag color="#844DE5" text="MOVIE" onPress={this.addTag} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.saveButtonContainer}>
                        <TouchableOpacity style={styles.saveButton}>
                            <Text style={styles.saveText}>SAVE</Text>
                        </TouchableOpacity>
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
