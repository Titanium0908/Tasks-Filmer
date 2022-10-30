import { Text, View } from 'react-native';
import headerStyles from '../styles/header';

export default function Header() {
    return (
      <View style={headerStyles.container}>
          <Text style={headerStyles.title}> 
            FILMER
          </Text>         
      </View>
    );
  };