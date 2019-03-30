import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../../../utils/fonts'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: responsiveHeight(2),
        paddingBottom: responsiveHeight(2),
        paddingLeft: responsiveWidth(5),
        paddingRight: responsiveWidth(5),
    },
    leftContainer: {
        flex: 7,
        flexDirection: 'column',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    tagsContainer: {
        flexDirection: 'row',
    },
    detailText: {
        marginTop: responsiveHeight(1.3),
        fontFamily: Fonts.MuliRegular,
        color: '#4A4A4A',
        fontSize: responsiveFontSize(1.8),
    },
    tagContainer: {
        marginLeft: responsiveWidth(2),
    },
    editImage: {
        height: responsiveWidth(4.5),
        width: responsiveWidth(4.5),
    },
})
