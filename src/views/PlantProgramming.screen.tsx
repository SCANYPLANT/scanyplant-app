import React, { useState } from 'react';
import { Button, Chip, Dialog, Portal, Text, TextInput } from 'react-native-paper';
import {  Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { Slider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';
import moment from 'moment';

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
    const [temperature, setTemperature] = useState(6);
    const [shift, setShift] = useState(0);
    const [repetition, setRepetition] = useState(0);


    const [date, setDate] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [showTemp, setShowTemp] = useState(false);
    const [showPicker, setShowPicker] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    return (
        <View style={{ backgroundColor:'white',  }}>
            <AppBar title="PROGRAMMATION"/>
            <View style={{ marginTop: 10,  }}>
                <Formik
                    initialValues={{
                        nextWatering: date,
                        shift: 0,
                        repetition: 0,
                        temperature: temperature,
                        brightness: '',
                    }}
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
                        <View style={{ backgroundColor:'white',  }}>
                            <TouchableOpacity onPress={() => setShow(!show)}>
                                <TextInput
                                    accessibilityStates
                                    label="Prochain arrosage"
                                    pointerEvents="none"
                                    style={{ backgroundColor: 'transparent' }}
                                    value={moment(date).format('DD/MM/YY HH:mm')}
                                />
                            </TouchableOpacity>
                            <View>
                                {show && (
                                    <Portal>
                                        <Dialog visible={() => setShow(!show)} onDismiss={() => setShow(!show)}>
                                            <Dialog.Content>
                                                <DateTimePicker
                                                    testID="dateTimePicker"
                                                    value={date}
                                                    mode={'datetime'}
                                                    locale="fr-FR"
                                                    onChange={onChange}

                                                />
                                            </Dialog.Content>
                                            <Dialog.Actions style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                <Button accessibilityStates
                                                        style={styles.button}
                                                        mode="contained"
                                                        onPress={() => setShow(!show)}>
                                                    Valider
                                                </Button>
                                            </Dialog.Actions>
                                        </Dialog>
                                    </Portal>
                                )}
                            </View>
                            {errors.nextWatering && touched.nextWatering && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.nextWatering}
                                </Text>
                            )}
                            <Text accessibilityStates style={{marginTop: 30}}>Décaler la tâche de {shift} jours</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                marginTop: 20
                            }}>
                                <Chip accessibilityStates style={{padding: 10}} selectedColor={'#57cc99'} onPress={() => {
                                    let value = shift - 1;
                                    if (shift > 0) {
                                        values.shift = value;
                                        setShift(value);
                                        handleChange('value');
                                    }
                                }}><Text accessibilityStates>- 1</Text></Chip>
                                <Chip accessibilityStates style={{padding: 10}} selectedColor={'#57cc99'} onPress={() => {
                                    let value = shift + 1;
                                    values.shift = value;
                                    setShift(value);
                                    handleChange('value');
                                }}><Text accessibilityStates>+ 1</Text></Chip>
                            </View>
                            {errors.shift && touched.shift && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.shift}
                                </Text>
                            )}
                            <Text accessibilityStates style={{marginTop: 30}}>Arroser tous les {values.repetition} jours</Text>
                            <View style={{
                                flex: 0,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'space-around',
                                marginTop: 20
                            }}>
                                <Chip accessibilityStates style={{padding: 10}} selectedColor={'#57cc99'} onPress={() => {
                                    let value = repetition - 1;
                                    if (repetition > 0) {
                                        values.repetition = value;
                                        setRepetition(value);
                                        handleChange('value');
                                    }
                                }}><Text accessibilityStates>- 1</Text></Chip>
                                <Chip accessibilityStates style={{padding: 10}} selectedColor={'#57cc99'} onPress={() => {
                                    let value = repetition + 1;
                                    if (repetition < 7) {
                                        values.repetition = value;
                                        setRepetition(value);
                                        handleChange('value');
                                    }
                                }}><Text accessibilityStates>+ 1</Text></Chip>
                            </View>
                            <Button accessibilityStates mode="contained" onPress={() => setShowTemp(!showTemp)} style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>Temperature: {temperature} °C</Button>
                                {showTemp && (
                                    <Portal>
                                        <Dialog visible={() => setShowTemp(!showTemp)}
                                                onDismiss={() => setShowTemp(!showTemp)}>
                                            <Dialog.Content>
                                                <Slider
                                                    value={temperature}
                                                    maximumValue={30}
                                                    minimumValue={-10}
                                                    step={1}
                                                    onValueChange={(v) => setTemperature(v)}
                                                />
                                            <Text accessibilityStates>Temperature: {temperature}°C</Text>
                                            </Dialog.Content>
                                            <Dialog.Actions style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                <Button accessibilityStates
                                                        style={styles.button}
                                                        mode="contained"
                                                        onPress={() => setShowTemp(!showTemp)}>
                                                    Valider
                                                </Button>
                                            </Dialog.Actions>
                                        </Dialog>
                                    </Portal>
                                )}
                            <TouchableOpacity onPress={() => setShowPicker(!showPicker)}>
                            <TextInput accessibilityStates
                                       style={{ backgroundColor:'white',  }}
                                       label="Luminosité"
                                       value={values.brightness}
                                       pointerEvents={'none'}
                                       onBlur={handleBlur('brightness')}
                                       onChangeText={handleChange('brightness')}
                            />
                            </TouchableOpacity>
                            <View>
                                {showPicker && (
                                    <Portal>
                                        <Dialog visible={() => setShowPicker(!showPicker)} onDismiss={() => setShowPicker(!showPicker)}>
                                            <Dialog.Content>
                                                <Picker
                                                    selectedValue={values.brightness}
                                                    onValueChange={handleChange('brightness')}
                                                >
                                                    <Picker.Item label="Direct" value="Direct" />
                                                    <Picker.Item label="Indirect" value="Indirect" />
                                                    <Picker.Item label="Mixte" value="Mixte" />
                                                </Picker>
                                            </Dialog.Content>
                                            <Dialog.Actions style={{ display: 'flex', justifyContent: 'space-around' }}>
                                                <Button accessibilityStates
                                                        style={styles.button}
                                                        mode="contained"
                                                        onPress={() => setShowPicker(!showPicker)}>
                                                    Valider
                                                </Button>
                                            </Dialog.Actions>
                                        </Dialog>
                                    </Portal>
                                )}
                            </View>
                            <Button accessibilityStates
                                    style={styles.button}
                                    mode="contained"
                                    onPress={handleSubmit}
                            >
                                Valider
                            </Button>
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
}
