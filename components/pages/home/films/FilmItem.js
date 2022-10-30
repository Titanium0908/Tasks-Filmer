import { Text, View, Image } from 'react-native';
import filmItemStyles from '../../../../styles/filmitem';

export default function FilmItem(props) {
  const filmTitle = props.title
  const filmRate = props.rate

    return (
      <View style={filmItemStyles.container}>
        <Image style={filmItemStyles.filmStyle} source={require('../../../../assets/images/KillBill.jpg')}/>
        <View style={filmItemStyles.rateContainerStyle}>
          <Text style={filmItemStyles.rateStyle}>
            {filmRate}
          </Text>
        </View>
      </View>
    );
  };