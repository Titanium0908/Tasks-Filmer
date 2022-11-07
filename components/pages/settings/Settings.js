import { Text, View } from 'react-native';
import settingsStyles from '../../../styles/settings';
import Swither from './Switcher';

export default function Settings() {
    return (
      <View style={settingsStyles.container}>
          <Text>
            Test
          </Text>
          <Swither/>
      </View>
    );
  };