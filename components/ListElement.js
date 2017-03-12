import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Style from '../style/Style';

export default class ListElement extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			itemText: this.props.itemText
		}
	}

	render() {
		return (
			<TouchableOpacity style={Style.listItem}>
				<Image
					style={{height: 50, width: 50}}
					source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
				/>
				<Text style={Style.listText}>
					{this.state.itemText}
				</Text>
			</TouchableOpacity>
		)
	}
}