import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default ({text, onPress}) => {
	const { buttonStyle, buttonText } = styles;
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle} activeOpacity={0.8}>
			<Text style={buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	buttonStyle: {
		marginTop: 20,
		padding: 15,
		borderRadius: 10,
		backgroundColor: '#D9853B'
	},
	buttonText: {
		color: '#ECECEA'
	}
});