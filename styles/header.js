import { StyleSheet } from 'react-native';
import darkColors from '../themes/colors/dark';
import fonts from '../themes/fonts/fonts';


const headerStyles = StyleSheet.create({
    title: {
      fontFamily: fonts.fontHeavy,
      fontSize: 40,
      color: darkColors.kindOfWhite,
      marginLeft: 16, 
    },
    container:{
      backgroundColor: darkColors.primary,
      flex: 1,
      justifyContent: 'center'
    }
});

export default headerStyles;