import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import NavigationService from '../../../../navigation/service'
import BackButton from '../../../../components/BackButton'
import Tag from '../../components/Tag'
import TagSection from '../../components/TagSection'
import styles from './styles'
import logo from '../../../../assets/icons/g-logo.png'
import * as actions from '../../actions'

import * as screenNames from '../../../../navigation/screen_names'

const AddStatusScreen = props => {
    const [selectedTags, setSelectedTags] = useState([])

    useEffect(() => {
        if (props.statusTags.length) {
            setSelectedTags(props.statusTags)
        }
    }, [])

    const renderSelectedTags = () => {
        let tagComponents = selectedTags.map((item, key) => {
            const id = key + 1

            return (
                <Tag
                    color={item.color}
                    text={item.text}
                    key={id}
                    index={key}
                    selected={item.selected}
                    onPress={removeTag}
                />
            )
        })

        if (!tagComponents.length) {
            tagComponents = (
                <Text style={[styles.sectionTitle, { marginTop: 10, marginLeft: 10 }]}>
                    Tap on tags below to select
                </Text>
            )
        }

        return tagComponents
    }

    const addTag = tag => {
        if (selectedTags.length < 3) setSelectedTags(selectedTags.concat(tag))
    }

    const removeTag = key => {
        const tags = [...selectedTags]
        tags.splice(key, 1)

        setSelectedTags(tags)
    }

    const onUpdateStatusTags = () => {
        props.updateStatusTags(selectedTags)

        NavigationService.navigate(screenNames.HOME)
    }

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
            <View style={styles.selectedTagsContainer}>{renderSelectedTags()}</View>
            <TextInput style={styles.descriptionInput} placeholder="Spill the details!" multiline />

            <View style={styles.tagSelectionContainer}>
                <Text style={styles.tagSelectionTitle}>Select up to 3 Tags</Text>
                <ScrollView style={styles.tagsScrollView}>
                    <TagSection
                        title="Suggestions"
                        tags={[
                            <Tag
                                color="#E68F4C"
                                text="EAT"
                                onPress={addTag}
                                count={14}
                                containerStyles={styles.tagContainer}
                            />,
                            <Tag
                                color="#C474CE"
                                text="DRINK"
                                onPress={addTag}
                                count={10}
                                containerStyles={styles.tagContainer}
                            />,
                            <Tag
                                color="#844DE5"
                                text="MOVIE"
                                onPress={addTag}
                                count={7}
                                containerStyles={styles.tagContainer}
                            />,
                        ]}
                    />
                    <TagSection
                        title="Food and Drink"
                        tags={[
                            <Tag
                                color="#E68F4C"
                                text="EAT"
                                onPress={addTag}
                                containerStyles={styles.tagContainer}
                            />,
                            <Tag
                                color="#C474CE"
                                text="DRINK"
                                onPress={addTag}
                                containerStyles={styles.tagContainer}
                            />,
                            <Tag
                                color="#844DE5"
                                text="MOVIE"
                                onPress={addTag}
                                containerStyles={styles.tagContainer}
                            />,
                        ]}
                    />
                </ScrollView>
            </View>
            <View style={styles.saveButtonContainer}>
                <TouchableOpacity style={styles.saveButton} onPress={onUpdateStatusTags}>
                    <Text style={styles.saveText}>SAVE</Text>
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
)(AddStatusScreen)
