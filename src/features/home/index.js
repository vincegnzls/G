import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import styles from './styles'
import * as actions from './actions'

import AddStatus from './components/AddStatus'
import TopTag from './components/TopTag'
import UserPosts from './components/UserPosts'
import Status from './components/Status'

class Home extends Component {
    renderHeader = () => {
        if (this.props.statusTags.length) {
            return <Status />
        }

        return (
            <View>
                <AddStatus />
                <TopTag />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <UserPosts />
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
)(Home)
