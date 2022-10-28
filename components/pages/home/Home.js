import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-web';
import homeStyles from '../../../styles/home';
import FilmItem from './films/FilmItem';
import FilmList from './films/FilmList';

export default function Home() {
    return (
      <View style={homeStyles.container}>
        <Text style={homeStyles.text}>
          Popular
        </Text>
        <FilmList/>
        <Text style={homeStyles.text}>
          Film For You
        </Text>
        <FilmList/>
      </View>
    );
  };