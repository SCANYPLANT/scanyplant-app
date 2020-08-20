import React from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';

const styles = StyleSheet.create({
	button: {
		textDecorationColor: '#ffffff',
		marginLeft: 20,
		marginRight: 20,
		marginVertical: 10,
	},
});

export default function SendMailForChangePassword({ navigation }) {
	return (
		<>
			<AppBar title="Change Password" />
			<>
				<Formik
					initialValues={{
						email: '',
						password: '',
						confirmPassword: '',
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string().email().required('This field is required'),
					})}
					onSubmit={values => console.log(values)}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						isValid,
					}) => (
						<>
							<TextInput
								label="Email"
								accessibilityStates
								value={values.email}
								onBlur={handleBlur}
								onChangeText={handleChange('email')}
							/>
							{errors.email && (
								<Text
									accessibilityStates
									style={{ fontSize: 10, color: 'red' }}
								>
									{errors.email}
								</Text>
							)}
							<Button
								disabled={!isValid}
								style={styles.button}
								accessibilityStates
								mode="contained"
								onPress={() => handleSubmit}
							>
								Validate
							</Button>
						</>
					)}
				</Formik>
				<Button
					accessibilityStates
					onPress={() => navigation.navigate('Login')}
				>
					Login
				</Button>
			</>
		</>
	);
}
