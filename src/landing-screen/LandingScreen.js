import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Button from './components/Button';
import InputField from './components/InputField';

export default class LandingScreen extends React.Component {
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

		this.onSubmitEditing = this.onSubmitEditing.bind(this);
		this.onChangeText = this.onChangeText.bind(this);
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

	onSubmitEditing() {
		console.log('submitted');
	}

	render() {
		const { landingContainer, textBig, textSmall } = styles;

		return (
			<View style={landingContainer}>
				<Text style={textBig}>HYVÄ AALTONEN!</Text>
				<Text style={textSmall}>Taas yksi setti alla! Ei muuta kuin uutta tulille.</Text>
				{this.renderInputFields()}
				<Button text={'Ja ei muutakun tekemään.'}></Button>
			</View>
		);
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
