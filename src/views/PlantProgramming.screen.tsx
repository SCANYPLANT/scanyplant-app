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

export default function PlantProgrammingScreen({ navigation }) {

    //Récupérer plant name
    
	return (
		<>
			<AppBar title="PROGRAMMATION" />
			<>
				<Formik
					initialValues={{
						nextWatering: '',
						shift: '',
						repetition: '',
						temperature: '',
						brightness: '',
					}}
					validationSchema={Yup.object().shape({
						nextWatering: Yup.string().required('This field is required'),
						shift: Yup.string().required('This field is required'),
						repetition: Yup.string().email().required('This field is required'),
						temperature: Yup.string().required('This field is required'),
						brightness: Yup.string().required('This field is required'),
					})}
					onSubmit={values => {
						return registerPlant(
							values.plantName,
							values.nextWatering,
							values.shift,
							values.repetition,
							values.temperature,
							values.brightness,
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
								label="Prochain arrosage"
								value={values.nextWatering}
								onBlur={handleBlur('nextWatering')}
								onChangeText={handleChange('nextWatering')}
							/>
							{errors.nextWatering && touched.nextWatering && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.nextWatering}
								</Text>
							)}
							<TextInput
								label="Décaler la tâche (jours)"
								value={values.shift}
								onBlur={handleBlur('shift')}
								onChangeText={handleChange('shift')}
							/>
							{errors.shift && touched.shift && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.shift}
								</Text>
							)}
							<TextInput
								label="Répétition"
								value={values.repetition}
								onBlur={handleBlur('repetition')}
								onChangeText={handleChange('repetition')}
							/>
							{errors.repetition && touched.repetition && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.repetition}
								</Text>
							)}
							<TextInput
								label="Température"
								value={values.temperature}
								onBlur={handleBlur('temperature')}
								onChangeText={handleChange('temperature')}
							/>
							{errors.temperature && touched.temperature && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.temperature}
								</Text>
							)}
							<TextInput
								label="Luminosité"
								value={values.brightness}
								onBlur={handleBlur('brightness')}
								onChangeText={handleChange('brightness')}
							/>
							{errors.brightness && touched.brightness && (
								<Text style={{ fontSize: 10, color: 'red' }}>
									{errors.brightness}
								</Text>
							)}
							<Button
								disabled={!isValid}
								style={styles.button}
								mode="contained"
								onPress={handleSubmit}
							>
								Valider
							</Button>
						</>
					)}
				</Formik>
			</>
		</>
	);
}
