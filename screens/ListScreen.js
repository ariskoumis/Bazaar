import React from 'react';
import {View, Button, Text, TextInput, ListView} from 'react-native';
import {Font} from 'expo';
import Router from '../navigation/Router';
import Style from '../style/Style';
import ListElement from '../components/ListElement';


export default class ListScreen extends React.Component {
	static route = {
		navigationBar: {
			title: "Product List"
		}
	}

	constructor() {
		super();
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(['row 1', 'row 2']),
			text: "Product Name"
		}
	}

	render() {
		return (
			<View>
				<ListElement itemText="test"/>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <ListElement itemText={rowData} /> } 
				/>
				<Button
					onPress = {this._handleOnPress}
					color = '#841584'
					title="Hello"
				/>
				<TextInput

					value = {this.state.text}
					onChangeText={(text) => this.setState({text})}
				/>
			</View>
		)
	}

	_handleOnPress = () => {
		var temp = this.state.dataSource._dataBlob.s1
		temp.push("test")
		this.setState({
			dataSource: this.state.dataSource.cloneWithRows(temp)
		})
	}

	_goToHome = () => {
		this.props.navigator.push(Router.getRoute('home'))
	}
}