import React from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';

import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    button: {
        textDecorationColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
});

export default function LoginScreen({ navigation }) {

    const loginUser = (body) => {
        // console.log('fetch');
        console.log('body ====>', body);
        fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        })
            .then(response => response.json())
            .then(result => {
                AsyncStorage.setItem('token', result.token).then(re => re).catch(e => e);
            })
            .catch(err => console.log(err));
    };
    return (
        <SafeAreaView>
            <AppBar title='LOGIN'/>
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
                    onSubmit={values => loginUser({ email: values.email, password: values.password })}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <TextInput
                                label='Email'
                                value={values.email}
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')}
                            />
                            {errors.email &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                            }
                            <TextInput
                                label='Password'
                                value={values.password}
                                onBlur={handleBlur('password')}
                                secureTextEntry={true}
                                onChangeText={handleChange('password')}
                            />
                            {errors.password &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                            }
                            <Button disabled={!isValid} style={styles.button} mode="contained"
                                    onPress={handleSubmit}> Login </Button>
                        </>
                    )}
                </Formik>
                <Button onPress={() => navigation.navigate('changePassword')}>Password forgotten</Button>
                <Button style={styles.button} onPress={() => navigation.navigate('Register')}>Register</Button>
            </>
        </SafeAreaView>
    );
}
