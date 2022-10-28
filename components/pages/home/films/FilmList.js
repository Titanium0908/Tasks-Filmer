import { View,Text, FlatList } from 'react-native';
import filmlistStyles from '../../../../styles/filmlist';
import DATA from '../../../../temp/data';
import FilmItem from './FilmItem';

export default function FilmList() {

  // const renderItem = ({item}) => {
    return(
      <FilmItem
        // title={item.title}
      />
    )
  }

  //   // return (
  //   //   <FlatList
  //   //     data={DATA}
  //   //     renderItem={renderItem}
  //   //     keyExtractor={(item) => item.id}
  //   //   />
  //   // );
  // };