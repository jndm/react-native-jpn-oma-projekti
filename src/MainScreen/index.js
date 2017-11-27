import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from 'react-native';
import { INITIAL_WEIGHT_SCREEN } from '../Navigation/Routes';

export default class MainScreen extends React.Component {
	constructor(props) {
		super(props);
	}

	async componentWillMount() {
		try {
			const data = await AsyncStorage.getItem('Program');
			if (data) {
				data = JSON.parse(data);
				this.setState({ data });
			}
		} catch (error) {
			console.log('ERROR' + error);
		}
	}

	renderCards() {
		var list = [];
		//const { group1, group2 } = this.state.program;
		console.log('STATE');
		console.log(this.state);
		// console.log(this.state.program.group1.length);

		return <Text>moroo</Text>;
		// if (this.state.program.group1.length === 0) {
		// 	return;
		// }

		// for (var i = 0; i < 6; i++) {
		// 	list.push(
		// 		<View>
		// 			<Text>{'Kyykky: ' + this.state.program.group1[i].backsquat.weight1 + 'kg'}</Text>
		// 			<Text>{'Mave: ' + this.state.program.group1[i].deadlift.weight1 + 'kg'}</Text>
		// 		</View>
		// 	);
		// 	list.push(
		// 		<View>
		// 			<Text>{'Penkki: ' + this.state.program.group2[i].benchPress.weight1 + 'kg'}</Text>
		// 			<Text>{'Pystäri: ' + this.state.program.group2[i].ohp.weight1 + 'kg'}</Text>
		// 		</View>
		// 	);
		// }

	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
				<Text>moro</Text>
				{this.renderCards()}
				<Button title="moro" onPress={() => navigate(INITIAL_WEIGHT_SCREEN)} />
			</View>
		);
	}
}
