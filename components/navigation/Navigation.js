import { View } from 'react-native';
import navigationStyles from '../../styles/navigation';
import NavigationButton from './NavigationButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Navigation() {
    return (
      <View style={navigationStyles.container}>
        <NavigationButton 
          title={"Home"}
          id={1}
          icon={"home"}
        />
        <NavigationButton
          title={"Settings"}
          id={2}
          icon={"cog"}
        />
        <NavigationButton
          title={"My"}
          id={3}
          icon={"bookmark"}
        />
        <NavigationButton
          title={"Search"}   
          id={4}  
          icon={"magnifying-glass"}

        />
        <NavigationButton
          title={"Profile"}
          id={5}
          icon={"user"}
        />
      </View>
    );
  };