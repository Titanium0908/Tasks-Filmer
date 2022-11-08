import { StyleSheet } from 'react-native';
import colors from '../themes/colors';

const navigationStyles = StyleSheet.create({
    container:{
      backgroundColor: colors.primary,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: '100%',
      height: 80,
      bottom: 0,
    }
});

export default navigationStyles;