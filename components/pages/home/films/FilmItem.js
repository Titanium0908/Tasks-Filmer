import { Text, View, Image } from 'react-native';
import filmItemStyles from '../../../../styles/filmitem';

export default function FilmItem(props) {
  const filmRate = props.rate
  const filmImg = props.image
    return (
      <View style={filmItemStyles.container}>
        <Image style={filmItemStyles.filmStyle} source={{uri :filmImg}}/>
        <View style={filmItemStyles.rateContainerStyle}>
          <Text style={filmItemStyles.rateStyle}>
            {filmRate}
          </Text>
        </View>
      </View>
    );
  };