import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen'
import CounterScreen from './src/screens/CounterScreen'
import ColorScreen from './src/screens/ColorScreen'
import ColorList from './src/screens/ColorList'
import ColorModifierList from './src/screens/ColorModifierList'
import ColorModifierListRed from './src/screens/ColorModifierListRed'
import TextScreen from './src/screens/TextScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    ClrSrc: ColorScreen,
    ClrList: ColorList,
    ClrModifierList: ColorModifierList,
    ClrModListRed: ColorModifierListRed,
    TxtScreen: TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
