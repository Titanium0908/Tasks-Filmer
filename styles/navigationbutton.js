import { StyleSheet } from 'react-native';
import colors from '../themes/colors';

const navigationbuttonStyles = StyleSheet.create({
    tinyLogoSelected: {
      color: colors.iconSelected,
      margin: 'auto',
    },
    pressableAreaSelected: {
      width: 58,
      height: 58,
      backgroundColor: colors.mainColor,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    tinyLogo: {
      color: colors.iconNotSelected,
      margin: 'auto',
    },
    pressableArea: {
      width: 58,
      height: 58,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
});

export default navigationbuttonStyles;