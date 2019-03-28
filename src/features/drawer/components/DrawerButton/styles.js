import { StyleSheet } from 'react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export default StyleSheet.create({
    drawerButton: {
        width: responsiveWidth(9),
        height: responsiveWidth(9),
        borderRadius: responsiveWidth(25),
        borderWidth: 2,
        borderColor: '#CC52FF',
        backgroundColor: '#ffffff',
        marginLeft: 20,
    },
})
