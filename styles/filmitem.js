import { StyleSheet,Dimensions } from 'react-native';
import darkColors from '../themes/colors/dark';
import fonts from '../themes/fonts/fonts';

const filmItemStyles = StyleSheet.create({
    container:{
      backgroundColor: darkColors.primary,
      width: Dimensions.get('window').width * 0.90,
      borderRadius: 20,
      margin: 5,
    },
    filmStyle:{
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
      borderRadius: 20,
      
    },
    rateContainerStyle:{
      position:'absolute',
      backgroundColor: darkColors.darkBlue,
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
      color: darkColors.kindOfWhite
    }
    
});

export default filmItemStyles;