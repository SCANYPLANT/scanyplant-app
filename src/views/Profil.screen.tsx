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

export default function ProfilScreen({ navigation }) {
	return (
		<>
			<AppBar title="MON COMPTE" />
			<>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string().email().required('This field is required'),
						password: Yup.string().required('This field is required'),
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
							<Text>Bienvenue xxx</Text>
							<TextInput
								label="Nom"
								value={values.lastName}
								onBlur={handleBlur('lastName')}
								onChangeText={e => handleChange('lastName')}
							/>
							{errors.lastName && (
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
							{errors.firstName && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.firstName}
								</Text>
							)}
							<Button onPress={() => navigation.navigate('ChangePassword')}>
								Modifier mon mot de passe
							</Button>
						</>
					)}
				</Formik>
				<Button
					onPress={() => navigation.navigate('changePassword')}
					mode="contained"
				>
					<Text>Enregistrer</Text>
				</Button>
				<Button
					style={styles.button}
					onPress={() => navigation.navigate('Register')}
				>
					Me deconnecter
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
