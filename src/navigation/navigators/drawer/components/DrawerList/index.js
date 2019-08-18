import React from 'react'
import { View, ScrollView } from 'react-native'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import * as screenNames from '../../../../screenNames'
import DrawerItem from '../DrawerItem'
import NavigationService from '../../../../service'

const drawerList = props => (
    <View style={{ marginTop: responsiveHeight(1.5), flex: 2 }}>
        <ScrollView>
            <DrawerItem
                onPress={() => NavigationService.navigate(screenNames.SETTINGS)}
                itemLabel="Settings"
            />
            <DrawerItem
                onPress={() => NavigationService.navigate(screenNames.ABOUT)}
                itemLabel="About"
            />
        </ScrollView>
    </View>
)

export default drawerList
