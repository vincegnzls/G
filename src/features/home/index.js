import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import styles from './styles'
import * as actions from './actions'

import AddStatus from './components/AddStatus'
import TopTag from './components/TopTag'
import UserPosts from './components/UserPosts'
import Status from './components/Status'

const Home = props => {
    const renderHeader = () => {
        if (props.statusTags.length) {
            return <Status />
        }

        return (
            <View>
                <AddStatus />
                <TopTag />
            </View>
        )
    }

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <View style={styles.container}>
            {renderHeader()}
            <UserPosts />
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
)(Home)
