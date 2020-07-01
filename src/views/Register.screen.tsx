import React from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { useDispatch } from 'react-redux';
import { userActions } from '../actions';

const styles = StyleSheet.create({
	button: {
		textDecorationColor: '#ffffff',
		marginLeft: 20,
		marginRight: 20,
		marginVertical: 10,
	},
	textSpan: {
		fontSize: 20,
		color: '#c7f9cc',
		flex: 1,
		alignItems: 'center',
		textAlign: 'center',
	},
});

export default function RegisterScreen({ navigation }) {
	const uDispatch = useDispatch();

	const registerUser = (email, firstName, lastName, password) => {
		uDispatch(userActions.register({ email, firstName, lastName, password }));
		return navigation.navigate('Login');
	};
	return (
		<>
			<AppBar title="REGISTER" />
			<>
				<Formik
					initialValues={{
						firstName: '',
						lastName: '',
						email: '',
						password: '',
						confirmPassword: '',
					}}
					validationSchema={Yup.object().shape({
						lastName: Yup.string().required('This field is required'),
						firstName: Yup.string().required('This field is required'),
						email: Yup.string().email().required('This field is required'),
						password: Yup.string().required('This field is required'),
						confirmPassword: Yup.string().when('password', {
							is: val => (val && val.length > 0 ? true : false),
							then: Yup.string().oneOf(
								[Yup.ref('password')],
								'Both password need to be the same',
							),
						}),
					})}
					onSubmit={values => {
						return registerUser(
							values.email,
							values.firstName,
							values.lastName,
							values.password,
						);
					}}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						isValid,
						touched,
					}) => (
						<>
							<TextInput
								label="Nom"
								value={values.lastName}
								onBlur={handleBlur('lastName')}
								onChangeText={handleChange('lastName')}
							/>
							{errors.lastName && touched.lastName && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.lastName}
								</Text>
							)}
							<TextInput
								label="Prenom"
								value={values.firstName}
								onBlur={handleBlur('firstName')}
								onChangeText={handleChange('firstName')}
							/>
							{errors.firstName && touched.firstName && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.firstName}
								</Text>
							)}
							<TextInput
								label="Email"
								value={values.email}
								onBlur={handleBlur('email')}
								onChangeText={handleChange('email')}
							/>
							{errors.email && touched.email && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.email}
								</Text>
							)}
							<TextInput
								label="Password"
								value={values.password}
								onBlur={handleBlur('password')}
								secureTextEntry={true}
								onChangeText={handleChange('password')}
							/>
							{errors.password && touched.password && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.password}
								</Text>
							)}
							<TextInput
								label="confirm Password"
								value={values.confirmPassword}
								onBlur={handleBlur('confirmPassword')}
								secureTextEntry={true}
								onChangeText={handleChange('confirmPassword')}
							/>
							{errors.confirmPassword && touched.confirmPassword && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.confirmPassword}
								</Text>
							)}
							<Button
								disabled={!isValid}
								style={styles.button}
								mode="contained"
								onPress={handleSubmit}
							>
								Register
							</Button>
						</>
					)}
				</Formik>
				<Button onPress={() => navigation.navigate('Login')}>Login</Button>
			</>
		</>
	);
}
