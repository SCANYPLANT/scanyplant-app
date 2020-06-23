import React from 'react';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';

const styles = StyleSheet.create({
    button: {
        textDecorationColor: "#ffffff",
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
});

export default function LoginScreen({ navigation }) {

    return (
        <SafeAreaView>
            <AppBar title ='LOGIN'/>
            <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().required("This field is required"),
                    password: Yup.string().required("This field is required"),
                })}
                onSubmit={values => console.log(values)}
            >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                        <TextInput
                            label='Email'
                            value={ values.email}
                            onBlur={handleBlur}
                            onChangeText={handleChange('email')}
                        />
                        {errors.email &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                        }
                        <TextInput
                            label='Password'
                            value={ values.password}
                            onBlur={handleBlur}
                            onChangeText={handleChange('password')}
                        />
                        {errors.password &&
                        <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                        }
                        <Button disabled={!isValid} style={styles.button} mode="contained" ><Text>Login</Text></Button>
                    </>
                    )}
                </Formik>
                <Button  onPress={() => navigation.navigate('changePassword')} >Password forgotten</Button>
                <Button style={styles.button} onPress={() => navigation.navigate('Register')}>Register</Button>
            </>
        </SafeAreaView>
    );
}