import { View, Text, ScrollView, FlatList } from 'react-native';
import pageStyles from '../styles/page';
import { useSelector } from 'react-redux'
import Settings from './pages/settings/Settings';
import Home from './pages/home/Home';
import My from './pages/my/My';

export default function Page() {  

  const currentPage = useSelector(state => state.page.currentPage)  

  const renderSwitch = () => {
    switch (currentPage) {
      case 1:
        return (<Home/>)
      case 2: 
        return (<Settings/>)
      case 3:
        return (<My/>)
      default:
        return (
        <Text>
          {currentPage}
        </Text>
        )
    }
  }

  return (
    <View style={pageStyles.container}>
      <ScrollView style={pageStyles.scrollView}>
        {renderSwitch()}
      </ScrollView>
    </View>
  );
};