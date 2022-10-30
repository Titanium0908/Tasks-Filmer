import { StyleSheet } from 'react-native';
import darkColors from '../themes/colors/dark';
import fonts from '../themes/fonts/fonts';

const filmlistStyles = StyleSheet.create({
    container:{
      flex: 1,
    },
    text:{
      fontSize: 30,
      color: darkColors.kindOfWhite,
      fontFamily: fonts.fontDemiBold,
      marginLeft: 16,
    },
    flatList:{
    },
    textContainer:{
      flex: 1,
      justifyContent: 'center'
    },
    flatListContainer:{
      flex: 5,
    }
});

export default filmlistStyles;