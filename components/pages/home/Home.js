import { View } from 'react-native';
import homeStyles from '../../../styles/home';
import FilmList from './films/FilmList';

export default function Home() {
    return (
      <View style={homeStyles.container}>
        <FilmList title={"POPULAR"}/>
        <FilmList title={"FILMS FOR YOU"}/>
      </View>
    );
  };