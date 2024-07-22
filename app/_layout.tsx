import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import HomeScreen from './(tabs)/Screens/Home';
import Detail from './(tabs)/Screens/Details';

const stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
export default function RootLayout ()
{
  
  const [ loaded ] = useFonts( {
    InterBold: require( '../assets/fonts/Inter-Bold.ttf' ),
    InterSemiBold: require( '../assets/fonts/Inter-SemiBold.ttf' ),
    InterMedium: require( '../assets/fonts/Inter-Medium.ttf' ),
    InterRegular: require( '../assets/fonts/Inter-Regular.ttf' ),
    InterLight: require( '../assets/fonts/Inter-Light.ttf' ),
  } );

  if ( !loaded ) return null;
  
  return (
    <NavigationContainer theme={theme} independent>
      <stack.Navigator
        screenOptions={ {
          headerShown: false,
        } }
        initialRouteName='Home'
      >
        <stack.Screen name='Home' component={HomeScreen}/>
        <stack.Screen  name='Details' component={Detail}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}
