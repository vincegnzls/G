import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import NavigationService from '../../../../navigation/service'
import BackButton from '../../../../components/BackButton'
import Tag from '../../components/Tag'
import styles from './styles'
import logo from '../../../../assets/icons/g-logo.png'
import * as actions from '../../actions'

import * as screenNames from '../../../../navigation/screen_names'

class AddStatusScreen extends Component {
    state = {
        selectedTags: [],
    }

    componentDidMount() {
        if (this.props.statusTags.length) {
            this.setState({ selectedTags: this.props.statusTags })
        }
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

        if (tags.length < 3) {
            tags.push(tag)

            this.setState({ selectedTags: tags })
        }
    }

    removeTag = key => {
        const tags = [...this.state.selectedTags]

        tags.splice(key, 1)

        this.setState({ selectedTags: tags })
    }

    onUpdateStatusTags = () => {
        this.props.updateStatusTags(this.state.selectedTags)

        NavigationService.navigate(screenNames.HOME)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'flex-start' }}>
                    <BackButton onPress={() => NavigationService.navigate(screenNames.HOME)} />
                </View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>I'm</Text>
                    <Image source={logo} style={styles.imageLogo} />
                    <Text style={styles.headerText}>to</Text>
                </View>
                <View style={styles.selectedTagsContainer}>{this.renderSelectedTags()}</View>
                <TextInput
                    style={styles.descriptionInput}
                    placeholder="Spill the details!"
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
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#C474CE"
                                    text="DRINK"
                                    onPress={this.addTag}
                                    count={10}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#844DE5"
                                    text="MOVIE"
                                    onPress={this.addTag}
                                    count={7}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#E68F4C"
                                    text="EAT"
                                    onPress={this.addTag}
                                    count={14}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#C474CE"
                                    text="DRINK"
                                    onPress={this.addTag}
                                    count={10}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#844DE5"
                                    text="MOVIE"
                                    onPress={this.addTag}
                                    count={7}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#E68F4C"
                                    text="EAT"
                                    onPress={this.addTag}
                                    count={14}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#C474CE"
                                    text="DRINK"
                                    onPress={this.addTag}
                                    count={10}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#844DE5"
                                    text="MOVIE"
                                    onPress={this.addTag}
                                    count={7}
                                    containerStyles={styles.tagContainer}
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
                                <Tag
                                    color="#E68F4C"
                                    text="EAT"
                                    onPress={this.addTag}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#C474CE"
                                    text="DRINK"
                                    onPress={this.addTag}
                                    containerStyles={styles.tagContainer}
                                />
                                <Tag
                                    color="#844DE5"
                                    text="MOVIE"
                                    onPress={this.addTag}
                                    containerStyles={styles.tagContainer}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.saveButtonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={this.onUpdateStatusTags}>
                        <Text style={styles.saveText}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
)(AddStatusScreen)
