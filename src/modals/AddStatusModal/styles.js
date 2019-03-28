import { StyleSheet } from 'react-native'
import {
    responsiveHeight,
    responsiveFontSize,
    responsiveWidth,
} from 'react-native-responsive-dimensions'
import { Fonts } from '../../utils/fonts'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: responsiveHeight(8),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(3),
    },
    headerText: {
        fontFamily: Fonts.FredokaOne,
        fontSize: responsiveFontSize(4),
        color: '#3FC3D8',
    },
    imageLogo: {
        marginLeft: 10,
        marginRight: 10,
        width: responsiveWidth(14),
        height: responsiveWidth(14),
    },
    selectedTagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,
        paddingBottom: 10,
        backgroundColor: '#F3F3F3',
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 20,
    },
})
