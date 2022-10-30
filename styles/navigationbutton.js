import { StyleSheet } from 'react-native';
import darkColors from '../themes/colors/dark';

const navigationbuttonStyles = StyleSheet.create({
    tinyLogoSelected: {
      color: darkColors.kindOfWhite,
      margin: 'auto',
    },
    pressableAreaSelected: {
      width: 58,
      height: 58,
      backgroundColor: darkColors.darkBlue,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    tinyLogo: {
      color: darkColors.gray,
      margin: 'auto',
    },
    pressableArea: {
      width: 58,
      height: 58,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    }
});

export default navigationbuttonStyles;