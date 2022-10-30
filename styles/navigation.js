import { StyleSheet } from 'react-native';
import darkColors from '../themes/colors/dark';

const navigationStyles = StyleSheet.create({
    container:{
      backgroundColor: darkColors.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      position:'absolute',
      width: '100%',
      height: 80,
      bottom: 0,
    }
});

export default navigationStyles;