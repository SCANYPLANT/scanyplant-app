import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { Slider } from 'react-native-elements';

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
    const [temperature, setTemperature] = useState(0);
    return (
        <>
            <AppBar title="PROGRAMMATION"/>
            <>
                <Formik
                    initialValues={{
                        nextWatering: '',
                        shift: '',
                        repetition: '',
                        temperature: 6,
                        brightness: '',
                    }}
                    validationSchema={
                        Yup.object().shape({
                        nextWatering: Yup.string().required('This field is required'),
                        shift: Yup.string().required('This field is required'),
                        repetition: Yup.string().email().required('This field is required'),
                        temperature: Yup.number().required('This field is required'),
                        brightness: Yup.string().required('This field is required'),
                    })}
                    onSubmit={values => {
                        console.log(values);
                        // return registerPlant(
                        //     values?.plant_name,
                        //     values.nextWatering,
                        //     values.shift,
                        //     values.repetition,
                        //     values.temperature,
                        //     values.brightness,
                        // )
                    }
                    }>
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
                                accessibilityStates
                                label="Prochain arrosage"
                                value={values.nextWatering}
                                onBlur={handleBlur('nextWatering')}
                                onChangeText={handleChange('nextWatering')}
                            />
                            {errors.nextWatering && touched.nextWatering && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.nextWatering}
                                </Text>
                            )}
                            <TextInput
                                accessibilityStates
                                label="Décaler la tâche (jours)"
                                value={values.shift}
                                onBlur={handleBlur('shift')}
                                onChangeText={handleChange('shift')}
                            />
                            {errors.shift && touched.shift && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.shift}
                                </Text>
                            )}
                            <TextInput
                                accessibilityStates
                                label="Répétition"
                                value={values.repetition}
                                onBlur={handleBlur('repetition')}
                                onChangeText={handleChange('repetition')}
                            />
                            {errors.repetition && touched.repetition && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.repetition}
                                </Text>
                            )}
                            <View style={{marginLeft:20, marginRight:20}}>
                                <Slider
                                    value={temperature}
                                    maximumValue={30}
                                    minimumValue={6}
                                    step={1}
                                    onValueChange={(v) => setTemperature(v)}
                                />
                                <Text accessibilityStates>Temperature: {temperature}°C</Text>
                            </View>
                            <TextInput
                                accessibilityStates
                                label="Température"
                                value={values.temperature}
                                onBlur={handleBlur('temperature')}
                                onChangeText={handleChange('temperature')}
                            />
                            {errors.temperature && touched.temperature && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.temperature}
                                </Text>
                            )}
                            <TextInput accessibilityStates
                                       label="Luminosité"
                                       value={values.brightness}
                                       onBlur={handleBlur('brightness')}
                                       onChangeText={handleChange('brightness')}
                            />
                            {errors.brightness && touched.brightness && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.brightness}
                                </Text>
                            )}
                            <Button accessibilityStates
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
