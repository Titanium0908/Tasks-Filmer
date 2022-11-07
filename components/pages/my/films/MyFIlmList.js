import { View,Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux'
import myFilmListStyles from '../../../../styles/myfilmlist';
import MyFilms from './MyFilms';


export default function MyFilmList(props) {
  const json = useSelector(state => state.data.films) 

  const renderItem = ({item}) => {
    return(
      <MyFilms
         image={item.image}
         rate={item.rate}
         year={item.year}
         genre={item.genre}
         name={item.name}
      />
    )
  }

    return (
      <View style={myFilmListStyles.container}>
         {/* <View style={myFilmListStyles.textContainer}>
          <Text style={myFilmListStyles.text}>
            {props.title}
          </Text>
        </View>  */}
        <View style={myFilmListStyles.flatListContainer}>
          <FlatList
            style={myFilmListStyles.flatList}
            data={json.data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal={false}
          />
        </View>                
      </View>
    );
  };