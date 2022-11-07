import { Text, View } from 'react-native';
import headerStyles from '../styles/header';
import { useSelector } from 'react-redux'

export default function Header() {
  const colors = useSelector(state => state.theme.isDark)
    return (
      <View style={headerStyles.container}>
          <Text style={headerStyles.title}> 
            FILMER
          </Text>         
      </View>
    );
  };