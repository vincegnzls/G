import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import {
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../../utils/fonts'

const drawerItem = props => (
    <TouchableOpacity onPress={props.onPress}>
        <Text
            style={{
                marginTop: responsiveHeight(3),
                marginLeft: responsiveWidth(4.5),
                fontFamily: Fonts.MuliBold,
                color: '#6B6B6B',
                fontSize: responsiveFontSize(2),
            }}
        >
            {props.itemLabel}
        </Text>
    </TouchableOpacity>
)

export default drawerItem
