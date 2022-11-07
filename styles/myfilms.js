import { StyleSheet,Dimensions } from 'react-native';
import colors from '../themes/colors';
import fonts from '../themes/fonts';

const myFilmsStyles = StyleSheet.create({
    container:{
      backgroundColor: colors.primary,
      width: Dimensions.get('window').width * 0.97,
      height: Dimensions.get('window').height * 0.3,
      borderRadius: 20,
      margin: 5,
      flexDirection: 'row'
    },
    textStyle:{
      flex:5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    filmStyle:{
      flex: 3,
      resizeMode: 'cover',
      borderRadius: 20,
      
    },
    rateContainerStyle:{
      position:'absolute',
      backgroundColor: colors.mainColor,
      width: 50,
      height: 35,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems:'center',
      top: 10,
      left: 10
    },
    rateStyle:{
      fontFamily: fonts.fontDemiBold,
      fontSize: 23,
      color: colors.textRate
    },
    nameContainerStyle:{
      alignItems:'center',
    },
    nameStyle:{
      fontFamily: fonts.fontDemiBold,
      fontSize: 20,
      color: colors.textParagraph,
    },
    yearContainerStyle:{
      alignItems:'center',
    },
    yearStyle:{
      fontFamily: fonts.fontMedium,
      fontSize: 15,
      color: colors.textParagraph
    },
    genreContainerStyle:{
      alignItems:'center',
    },
    genreStyle:{
      fontFamily: fonts.fontMedium,
      fontSize: 15,
      color: colors.textParagraph
    },
    addIcon:{
      color: colors.iconNotSelected,
      margin: 'auto',
      position:'absolute',
      right: 10,
      top: 10
    }
    
});

export default myFilmsStyles;