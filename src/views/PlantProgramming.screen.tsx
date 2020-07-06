import React, { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View, Picker } from 'react-native';
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
    detailButton: {
        width: '40%',
        marginLeft: '5%'
    },
});

export default function PlantProgrammingScreen({ navigation }) {

    //Récupérer plant name
    const [temperature, setTemperature] = useState(0);
    const [shift, setShift] = useState(0);
    const [repetition, setRepetition] = useState(0);

    return (
        <>
            <AppBar title="PROGRAMMATION"/>
            <>
                <Formik
                    initialValues={{
                        nextWatering: '',
                        shift: 0,
                        repetition: 0,
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
                            <Text accessibilityStates>Décaler la tâche de {shift} jours</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: 'row',
                                alignItems: 'center'}}>
                                <Button accessibilityStates style={styles.detailButton} mode="contained"
                                        onPress={() => {
                                            let value = shift - 1;
                                            if (shift > 0) {
                                                values.shift = value
                                                setShift(value)
                                                handleChange('value')
                                            }}}>
                                    -1
                                </Button>
                                <Button accessibilityStates style={styles.detailButton} mode="contained"
                                        onPress={() => {
                                            let value = shift + 1
                                            values.shift = value
                                            setShift(value)
                                            handleChange('value')
                                        }}>
                                    +1
                                </Button>
                            </View>
                            {errors.shift && touched.shift && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.shift}
                                </Text>
                            )}
                            <Text accessibilityStates>Arroser tous les {values.repetition} jours</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: 'row',
                                alignItems: 'center'}}>
                                <Button accessibilityStates style={styles.detailButton} mode="contained"
                                        onPress={() => {
                                            let value = repetition - 1;
                                            if (repetition > 0) {
                                                values.repetition = value
                                                setRepetition(value)
                                                handleChange('value')
                                            }}}>
                                    -1
                                </Button>
                                <Button accessibilityStates style={styles.detailButton} mode="contained"
                                        onPress={() => {
                                            let value = repetition + 1
                                            if (repetition < 7 ) {
                                                values.repetition = value
                                                setRepetition(value)
                                                handleChange('value')
                                            }
                                        }}>
                                    +1
                                </Button>
                            </View>
                            {errors.repetition && touched.repetition && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.repetition}
                                </Text>
                            )}
                                    <Text accessibilityStates>Shows one row:</Text>
                                        <Picker 
                                        selectedValue={values.temperature}
                                        >
                                        <Picker.Item label="Java" value="java" />
                                        <Picker.Item label="JavaScript" value="js" />
                                        <Picker.Item label="Python" value="python" />
                                        <Picker.Item label="Haxe" value="haxe" />
                                        </Picker>
                            <View style={{marginLeft:50, marginRight:50}}>
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
