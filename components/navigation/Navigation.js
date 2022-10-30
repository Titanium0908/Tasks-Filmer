import { View } from 'react-native';
import navigationStyles from '../../styles/navigation';
import NavigationButton from './NavigationButton';

export default function Navigation() {
    return (
      <View style={navigationStyles.container}>
        <NavigationButton 
          id={1}
          icon={"home"}
        />
        <NavigationButton
          id={2}
          icon={"cog"}
        />
        <NavigationButton
          id={3}
          icon={"bookmark"}
        />
        <NavigationButton 
          id={4}  
          icon={"search"}
        />
        <NavigationButton
          id={5}
          icon={"user"}
        />
      </View>
    );
  };