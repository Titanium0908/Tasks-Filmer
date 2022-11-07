import { StyleSheet } from 'react-native';
import colors from '../themes/colors';
import fonts from '../themes/fonts';


const headerStyles = StyleSheet.create({
    title: {
      fontFamily: fonts.fontHeavy,
      fontSize: 40,
      color: colors.textHeader,
      marginLeft: 16, 
    },
    container:{
      backgroundColor: colors.primary,
      flex: 1,
      justifyContent: 'center'
    },
});

export default headerStyles;