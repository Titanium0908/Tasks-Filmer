import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Text, View, Pressable } from 'react-native';
import { setPage } from '../../features/counter/pageSlice';
import navigationbuttonStyles from '../../styles/navigationbutton';
import Icon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function NavigationButton(props) {
  const id = props.id;
  const title = props.title;
  const icon = props.icon;
  //const [title, setTitle] = useState(props.title)
  const dispatch = useDispatch()
  
  return (  
      <View style={navigationbuttonStyles.container}>
        <Pressable style={navigationbuttonStyles.pressableArea} onPress={() => dispatch(setPage(id))}>
        <FontAwesome5Icon size={30} name={icon} style={navigationbuttonStyles.tinyLogo}/>       
          <Text style={navigationbuttonStyles.title}>
            {title}
          </Text>
        </Pressable>
      </View>
    );
  };
  