import { StyleSheet } from 'react-native';
import darkColors from '../themes/colors/dark';
import fonts from '../themes/fonts/fonts';

const homeStyles = StyleSheet.create({
    container:{
      flex: 1,
      
    },
    text:{
        fontFamily: fonts.fontDemiBold,
        fontSize: 34,
        color: darkColors.kindOfWhite,
        margin: 'auto',
        flex: 1,
    },
});

export default homeStyles;