import { StyleSheet } from 'react-native';
import colors from '../themes/colors';
import fonts from '../themes/fonts';

const searchBoxStyles = StyleSheet.create({
    container:{
      height: 35,
      paddingLeft: 20,
      color: colors.textParagraph,
      fontStyle: fonts.fontHeavy,
      fontSize: 30,
      borderRadius: 10,
      borderColor: colors.mainColor,
      borderWidth: 1,
    }
});

export default searchBoxStyles;