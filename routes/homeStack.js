import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import selectFrom from '../screens/selectFrom';

const screens = {
    selectFrom: {
      screen: selectFrom
    },
}

const HomeStack = createNativeStackNavigator(screens);
export default NavigationContainer(HomeStack);