import {createRouter} from '@expo/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ListScreen from '../screens/ListScreen';

export default createRouter(() => ({
	home: () => HomeScreen,
	about: () => AboutScreen,
	list: () => ListScreen
}));