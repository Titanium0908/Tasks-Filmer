import { Text, View, Image } from 'react-native';
import myFilmsStyles from '../../../../styles/myfilms';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function MyFilms(props) {
  const filmRate = props.rate
  const filmimg = props.image
  const filmName = props.name
  const filmGenre = props.genre
  const filmYear = props.year
    return (
      <View style={myFilmsStyles.container}>
        <Image style={myFilmsStyles.filmStyle} source={{uri :filmimg}}/>
        <View style={myFilmsStyles.rateContainerStyle}>
          <Text style={myFilmsStyles.rateStyle}>
            {filmRate}
          </Text>
        </View>
        {/* Одно большое view для всего текста, т.к. нужно расположить текст друг под другом с разным форматированием*/}
        <View style={myFilmsStyles.textStyle}>
          <View style={myFilmsStyles.nameContainerStyle}>
            <Text style={myFilmsStyles.nameStyle}>
              {filmName}
            </Text>
          </View>
          <View style={myFilmsStyles.yearContainerStyle}>
            <Text style={myFilmsStyles.yearStyle}>
            {filmYear}
            </Text>
          </View>
          <View style={myFilmsStyles.genreContainerStyle}>
            <Text style={myFilmsStyles.genreStyle}>  
            {filmGenre} 
            </Text>
          </View>
        </View>
        <FontAwesomeIcon
          style={myFilmsStyles.addIcon} 
          name={['bookmark']}
          size={30} />
      </View>
    );
  };