import React, { useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import User from '../models/user';

const styles = StyleSheet.create({
	button: {
		textDecorationColor: '#ffffff',
		marginLeft: 20,
		marginRight: 20,
		marginVertical: 10,
	},
});
export default function ProfilScreen({ navigation }) {
	const uDispatch = useDispatch();
	useEffect(() => {
		uDispatch(userActions.me());
	}, []);
	const user: User = useSelector((state: any) => state.users?.user);
	return (
		<>
			<AppBar title="MON COMPTE" />
			<>
				<Text>Bienvenue </Text>
				<Formik
					initialValues={{
						email: user && user.email,
						firstName: user && user.firstName,
						lastName: user && user.lastName,
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string().email().required('This field is required'),
						firstName: Yup.string().required('This field is required'),
						lastName: Yup.string().required('This field is required'),
					})}
					onSubmit={values =>
						console.log('values ====>=====>====>====>', values)
					}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						touched,
						isValid,
					}) => (
						<>
							<TextInput
								label="Nom"
								value={values.lastName}
								onBlur={handleBlur('lastName')}
								onChangeText={e => handleChange('lastName')}
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
								onChangeText={e => handleChange('firstName')}
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
								onChangeText={e => handleChange('email')}
							/>
							{errors.email && touched.email && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.email}
								</Text>
							)}
							<Button onPress={handleSubmit} mode="contained">
								Enregistrer
							</Button>
						</>
					)}
				</Formik>
				<Button onPress={() => navigation.navigate('ChangePassword')}>
					Modifier mon mot de passe
				</Button>
				<Button
					style={styles.button}
					onPress={() => navigation.navigate('Register')}
				>
					Me désinscrire
				</Button>
			</>
		</>
	);
}
