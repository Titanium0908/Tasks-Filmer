import { StyleSheet } from 'react-native';
import colors from '../themes/colors';
import fonts from '../themes/fonts';

const myFilmListStyles = StyleSheet.create({
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
      flex: 3,
      justifyContent: 'flex-end'
    },
    flatListContainer:{
      flex: 1,
    }
});

export default myFilmListStyles;