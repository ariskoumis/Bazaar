import React from 'react';
import {View, Text} from 'react-native';
import Router from '../navigation/Router';
import Style from '../style/Style';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      title: "Home",
    }
  }

  render() {
    return (
      <View style={Style.container}>
        <Text>HomeScreen!</Text>
        <Text onPress={this._goToAbout}>
          Push about route
        </Text>
      </View>
    )
  }

  _goToAbout = () => {
    this.props.navigator.push(Router.getRoute('about'));
  }
}
