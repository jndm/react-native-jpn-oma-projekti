import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default ({ label, value, onChangeText }) => {
	const { inputFieldContainerStyle, textSmall, textInputStyle } = styles;
	return (
		<View style={inputFieldContainerStyle}>
			<View>
				<Text style={textSmall}>{label}:</Text>
			</View>
			<View>
				<TextInput
					style={textInputStyle}
					onChangeText={onChangeText}
					value={value}
					keyboardType='numeric'
					onSubmitEditing={this.onSubmitEditing} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputFieldContainerStyle: {
		width: 150,
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	textSmall: {
		fontSize: 12,
		color: '#fff',
		paddingLeft: 10
	},
	textInputStyle: {
		height: 30,
		width: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 4,
		backgroundColor: '#ECECEA',
		marginLeft: 5
	}
});
