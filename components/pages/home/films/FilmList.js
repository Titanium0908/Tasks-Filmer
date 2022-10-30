import { View,Text, FlatList } from 'react-native';
import filmlistStyles from '../../../../styles/filmlist';
import FilmItem from './FilmItem';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function FilmList(props) {
  const json = useSelector(state => state.data.films) 

  const renderItem = ({item}) => {
    return(
      <FilmItem
         title={item.title}
         rate={item.rate}
      />
    )
  }

    return (
      <View style={filmlistStyles.container}>
        <View style={filmlistStyles.textContainer}>
          <Text style={filmlistStyles.text}>
            {props.title}
          </Text>
        </View>
        <View style={filmlistStyles.flatListContainer}>
          <FlatList
            style={filmlistStyles.flatList}
            data={json.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </View>                
      </View>
    );
  };