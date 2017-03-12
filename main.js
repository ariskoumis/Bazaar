 import Expo, {Font, Components} from 'expo';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import Router from './navigation/Router';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      appIsReady: false  
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'roboto': require('./assets/fonts/roboto-black.ttf')
    })  

    this.setState({ appIsReady: true });
  }

  render() {
    if (!this.state.appIsReady) {
      return <Components.AppLoading />
    }

    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('list')} />
      </NavigationProvider>
    );
  }

  // async _cacheResourcesAsync() {
  //   await Font.loadAsync({
  //     'roboto': require('./assets/fonts/roboto-black.ttf')
  //   })
  //   this.setState([appIsReady: true])
  // }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
