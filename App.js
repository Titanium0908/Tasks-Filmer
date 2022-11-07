import { View, StatusBar } from 'react-native';
import Header from './components/Header';
import Navigation from './components/navigation/Navigation';
import Page from './components/Page';
import appStyles from './styles/app';
import store from './app/store'
import { Provider } from 'react-redux'
import colors from './themes/colors';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {

  const [fontsLoaded] = useFonts({
    'VisbyRoundCF-DemiBold': require('./assets/fonts/VisbyRoundCF-DemiBold.ttf'),
    'VisbyRoundCF-Heavy': require('./assets/fonts/VisbyRoundCF-Heavy.ttf'),
    'VisbyRoundCF-Medium': require('./assets/fonts/VisbyRoundCF-Medium.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (   
    <Provider store={store}>
      <View style={appStyles.container} onLayout={onLayoutRootView}>
        <StatusBar
          animated={true}
          backgroundColor={colors.primary}
          barStyle={'light-content'}
          hidden={false}/>
        <Header/>
        <Page/>
        <Navigation/>
      </View>
    </Provider>   
  );
};
