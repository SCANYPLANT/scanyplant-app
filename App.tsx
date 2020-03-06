import React from 'react';
import Home from './src/screens/Home.screen';
import Login from './src/screens/Login.screen';
import Register from './src/screens/Register.screen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import rootThemeStyles from './src/styles/rootTheme.styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <PaperProvider theme={rootThemeStyles}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Login"
                >
                    <Stack.Screen
                        name="Home"
                        component={Home}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
