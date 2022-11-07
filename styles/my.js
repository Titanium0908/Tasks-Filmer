import { StyleSheet } from 'react-native';
import colors from '../themes/colors';
import fonts from '../themes/fonts';

const myStyles = StyleSheet.create({
    container:{
      flex: 1,     
    },
    text:{
        fontFamily: fonts.fontDemiBold,
        fontSize: 34,
        color: colors.textHeader,
        margin: 'auto',
        flex: 1,
    },
});

export default myStyles;