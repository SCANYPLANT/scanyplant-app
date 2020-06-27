import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { HomeScreen, LoginScreen, PlantsListScreen, RegisterScreen } from '../views';

import { createStackNavigator } from '@react-navigation/stack';
import SendMailForChangePassword from '../views/SendMailForChangePassword.screen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

let isSignedIn =  AsyncStorage.getItem('token').then(() =>  true).catch(() =>  false);
export default function Navigation() {

    useEffect(() => {
        async function getToken() {
            isSignedIn
        }
console.log(isSignedIn)
        getToken().then(r => r);
    }, []);
    return (
        <NavigationContainer>
            {
                isSignedIn === null ? (
                    <>
                        <Tab.Navigator
                            initialRouteName="Home"
                            screenOptions={({ route }) => ({
                                tabBarIcon: ({ focused, color, size }) => {
                                    let iconName;
                                    if (route.name === 'Home') {
                                        iconName = focused ? 'ios-home' : 'ios-home';
                                    } else if (route.name === 'Login') {
                                        iconName = focused ? 'md-person' : 'md-person';
                                    } else if (route.name === 'Register') {
                                        iconName = focused ? 'md-person-add' : 'md-person-add';
                                    } else if (route.name === 'My Plants') {
                                        iconName = focused ? 'md-person-add' : 'md-person-add';
                                    }
                                    return <Ionicons name={iconName} size={size} color={color}/>;
                                },
                                tabBarVisible: true,
                            })}
                            tabBarOptions={{
                                activeTintColor: '#22577A',
                                inactiveTintColor: '#22577A',
                                inactiveBackgroundColor: '#c7F9CC',
                                activeBackgroundColor: '#57CC99',
                            }}
                        >
                            <Tab.Screen name="Home" component={HomeScreen}/>
                            <Tab.Screen name="My Plants" component={PlantsListScreen}/>
                        </Tab.Navigator>
                    </>
                ) : (
                    <>
                        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
                            <Stack.Screen name="Login" component={LoginScreen}/>
                            <Stack.Screen name="Register" component={RegisterScreen}/>
                            <Stack.Screen name="changePassword" component={SendMailForChangePassword}/>
                        </Stack.Navigator>
                    </>
                )
            }
        </NavigationContainer>
    );
}
