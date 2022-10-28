import { Text, View, Image } from 'react-native';

export default function FilmItem(props) {
  const filmTitle = props.title

    return (
      <View>
        {/* <img src='assets/images/Film.png'/> */}
        <Image style={{height: "50vmin", width: "50vmin"}} source={require('../../../../assets/images/Film.png')}/>
        <Text>
          {filmTitle}
        </Text>
      </View>
    );
  };