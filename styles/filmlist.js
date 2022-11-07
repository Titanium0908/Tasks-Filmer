import { StyleSheet } from 'react-native';
import colors from '../themes/colors';
import fonts from '../themes/fonts';

const filmlistStyles = StyleSheet.create({
    container:{
      flex: 1,
    },
    text:{
      fontSize: 30,
      color: colors.textHeader,
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