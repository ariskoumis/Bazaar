import React from 'react';
import {View, Text} from 'react-native';
import Router from '../navigation/Router';
import Style from '../style/Style';

export default class AboutScreen extends React.Component {
  static route = {
    navigationBar: {
      title: "About"
    }
  }
  render() {
    return (
      <View style={Style.container}> 
        <Text onPress={this._goToHome}> 
          Hey 
        </Text>
        <Text onPress={this._goToList}>
          List
        </Text>
      </View>
    )
  }

  _goToHome = () => {
    this.props.navigator.push(Router.getRoute('home'))
  }

  _goToList = () => {
    this.props.navigator.push(Router.getRoute('list'))
  }
}