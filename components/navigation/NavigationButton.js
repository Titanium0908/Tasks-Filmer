import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Pressable } from 'react-native';
import { setPage } from '../../features/counter/pageSlice';
import navigationbuttonStyles from '../../styles/navigationbutton';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function NavigationButton(props) {
  const id = props.id;
  const icon = props.icon;
  const dispatch = useDispatch()

  const currentPage = useSelector(state => state.page.currentPage)  
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (currentPage === id) {
      setIsSelected(true)
    }
    else {
      setIsSelected(false)
    }
  }, [currentPage]);

  return (  
    <Pressable 
      style={isSelected ? navigationbuttonStyles.pressableAreaSelected : navigationbuttonStyles.pressableArea} 
      onPress={() => dispatch(setPage(id))}>
      <FontAwesomeIcon 
        size={30} 
        name={icon} 
        style={isSelected ? navigationbuttonStyles.tinyLogoSelected : navigationbuttonStyles.tinyLogo}/>
    </Pressable>
    );
  };
  