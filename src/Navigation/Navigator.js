import { StackNavigator } from 'react-navigation';
import MainScreen from '../MainScreen';
import InitialWeightScreen from '../InitialWeightScreen';
import { MAIN_SCREEN, INITIAL_WEIGHT_SCREEN } from './Routes';

const Navigator = StackNavigator({
		MAIN_SCREEN: { screen: MainScreen },
		INITIAL_WEIGHT_SCREEN: { screen: InitialWeightScreen }
	},{
		initialRouteName: MAIN_SCREEN,
	}
);

export default Navigator;