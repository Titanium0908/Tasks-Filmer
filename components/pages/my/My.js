import { View } from 'react-native';
import myStyles from '../../../styles/my';
import MyFilmList from './films/MyFIlmList';


export default function My() {
    return (
      <View style={myStyles.container}>
        <MyFilmList/>
      </View>
    );
  };