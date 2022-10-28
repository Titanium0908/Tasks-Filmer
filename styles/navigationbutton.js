import { StyleSheet } from 'react-native';

const navigationbuttonStyles = StyleSheet.create({
    title: {
      fontSize: 20,
      color: "#DC7311",
      flexDirection: "row",
      margin: 'auto',
    },
    container:{
      flex: 1,
      alignItems: "stretch",
      //marginHorizontal: 'auto',
    },
    tinyLogo: {
      color: "#DC7311",
      margin: 'auto',
    },
    pressableArea: {
      flex: 1,
    }
});

export default navigationbuttonStyles;