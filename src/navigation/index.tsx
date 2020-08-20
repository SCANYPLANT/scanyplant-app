import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';

import {
	CameraScreen,
	ChangePasswordScreen,
	IdentificationResultScreen,
	ImageIdentificationScreen,
	LoginScreen,
	PlantDetailsScreen,
	PlantIdentificationScreen,
	PlantProgrammingScreen,
	PlantsListScreen,
	ProfilScreen,
	RegisterScreen,
	SendMailForChangePassword,
} from '../views';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { readStorage } from '../utils/storage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Identification"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="Identification"
				component={PlantIdentificationScreen}
			/>
			<Stack.Screen
				name="imageIdentification"
				component={ImageIdentificationScreen}
			/>
			<Stack.Screen
				name="identificationResult"
				component={IdentificationResultScreen}
			/>
			<Stack.Screen name="plantDetails" component={PlantDetailsScreen} />
			<Stack.Screen
				name="plantProgramming"
				component={PlantProgrammingScreen}
			/>
			<Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
			<Stack.Screen name="Camera" component={CameraScreen} />
		</Stack.Navigator>
	);
};
const ProfilStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="ProfilScreen"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="ProfilScreen" component={ProfilScreen} />
			<Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
		</Stack.Navigator>
	);
};

export default function Navigation() {
	let isSignedIn;
	readStorage('token').then(r => (isSignedIn = r));
	useSelector((state: any) => {
		if (state.authentication.user && state.authentication.user.meta) {
			return (isSignedIn = true);
		}
	});
	useEffect(() => {
		if (isSignedIn) {
			isSignedIn = true;
		}
	}, []);
	return (
		<NavigationContainer>
			{isSignedIn ? (
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
								} else if (route.name === 'Mes plantes') {
									iconName = focused ? 'ios-leaf' : 'ios-leaf';
								} else if (route.name === 'Identification') {
									iconName = focused ? 'ios-images' : 'ios-images';
								} else if (route.name === 'Camera') {
									iconName = focused ? 'ios-camera' : 'ios-camera';
								} else if (route.name === 'Gallery') {
									iconName = focused ? 'ios-images' : 'ios-images';
								} else if (route.name === 'ImageIdentification') {
									iconName = focused ? 'ios-images' : 'ios-images';
								} else if (route.name === 'Profil') {
									iconName = focused ? 'md-person' : 'md-person';
								}
								return <Ionicons name={iconName} size={size} color={color} />;
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
						<Tab.Screen name="Mes plantes" component={PlantsListScreen} />
						<Tab.Screen name="Identification" component={HomeStack} />
						<Tab.Screen name="Profil" component={ProfilStack} />
					</Tab.Navigator>
				</>
			) : (
				<>
					<Stack.Navigator
						screenOptions={{ headerShown: false }}
						initialRouteName={'Login'}
					>
						<Stack.Screen name="Login" component={LoginScreen} />
						<Stack.Screen name="Register" component={RegisterScreen} />
						<Stack.Screen
							name="changePassword"
							component={SendMailForChangePassword}
						/>
					</Stack.Navigator>
				</>
			)}
		</NavigationContainer>
	);
}
