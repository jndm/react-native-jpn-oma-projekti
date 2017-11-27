import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage } from 'react-native';
import Button from './Button';
import InputField from './InputField';
import { MAIN_SCREEN } from '../Navigation/Routes';

export default class extends React.Component {
	constructor(props) {
		super(props);

		// TODO MOVE TO REDUX
		const trainingMoves = [
			{ benchPress: { label: 'Penkki', startingWeight: '' } },
			{ backsquat: { label: 'Kyykky', startingWeight: '' } },
			{ deadlift: { label: 'Mave', startingWeight: '' } },
			{ ohp: { label: 'Pystypunnerrus', startingWeight: '' } }
		];

		this.state = { trainingMoves };

		this.onChangeText = this.onChangeText.bind(this);
		this.handleOnPress = this.handleOnPress.bind(this);
	}

	renderInputFields() {
		return (
			this.state.trainingMoves.map((moveObject) => {
				var moveKey = Object.keys(moveObject)[0];
				return <InputField key={moveKey}
					value={moveObject[moveKey].startingWeight}
					label={moveObject[moveKey].label}
					onChangeText={(e) => this.onChangeText(moveKey, moveObject[moveKey], e)} />;
			}));
	}

	onChangeText(moveKey, move, value) {
		move.startingWeight = value;
		this.setState({ [moveKey]: move });
	}

	async handleOnPress() {
		var sets = this.generateProgram();
		try {
			await AsyncStorage.setItem('Program', JSON.stringify(sets));
			this.props.navigation.goBack();
		} catch (error) {
			console.log(error);	
		}
	}

	render() {
		const { landingContainer, textBig, textSmall } = styles;

		return (
			<View style={landingContainer}>
				<Text style={textBig}>HYVÄ AALTONEN!</Text>
				<Text style={textSmall}>Taas yksi setti alla! Ei muuta kuin uutta tulille.</Text>
				{this.renderInputFields()}
				<Button onPress={this.handleOnPress} text={'Ja ei muutakun tekemään.'}></Button>
			</View>
		);
	}

	generateProgram() {
		var sets = { group1: [], group2: [] };
		for (var i = 0; i < 6; i++) {
			sets.group1.push(
				{
					set: i + 1,
					reps: i + 5,
					backsquat: {
						weight1: this.state.backsquat.startingWeight * 0.85,
						weight2: this.state.backsquat.startingWeight * 0.75,
					},
					deadlift: {
						weight1: this.state.deadlift.startingWeight * 0.85,
						weight2: this.state.deadlift.startingWeight * 0.75,
					},
					completed: false
				}
			);
		}

		for (var i = 0; i < 6; i++) {
			sets.group2.push(
				{
					set: i + 1,
					reps: i + 5,
					benchPress: {
						weight1: this.state.benchPress.startingWeight * 0.85,
						weight2: this.state.benchPress.startingWeight * 0.75,
					},
					ohp: {
						weight1: this.state.ohp.startingWeight * 0.85,
						weight2: this.state.ohp.startingWeight * 0.75,
					},
					completed: false
				}
			);
		}

		return sets;
	}
}

const styles = StyleSheet.create({
	landingContainer: {
		flex: 1,
		backgroundColor: '#74AFAD',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textBig: {
		fontSize: 40,
		color: '#fff'
	},
	textSmall: {
		fontSize: 12,
		color: '#fff',
		paddingLeft: 10
	}
});
