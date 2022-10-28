import { View } from 'react-native';
import {Provider as PaperProvider } from 'react-native-paper';
import Header from './components/Header';
import Navigation from './components/navigation/Navigation';
import Page from './components/Page';
import appStyles from './styles/app';
import store from './app/store'
import { Provider } from 'react-redux'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
export default function App() {
  return (
    
    <Provider store={store}>
    <PaperProvider>
      <View style={appStyles.container}>
        <Header/>
        <Page/>
        <Navigation/>
      </View>
      </PaperProvider>
    </Provider>   
  );
};
