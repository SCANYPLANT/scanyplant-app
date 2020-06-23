import React from 'react';
import { Button, Card, Subheading, Text, TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';


const styles = StyleSheet.create({
    button: {
        textDecorationColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
    textSpan: {
        fontSize: 20,
        color: '#c7f9cc',
        flex: 1,
        alignItems: 'center',
        textAlign: 'center'
    },
});

export default function RegisterScreen({ navigation }) {

    return (
        <SafeAreaView>
            <AppBar title ='REGISTER'/>
            <>
                <Formik
                    initialValues={{
                        nom: '',
                        prenom: '',
                        email: '',
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={Yup.object().shape({
                        nom: Yup.string().required('This field is required'),
                        prenom: Yup.string().required('This field is required'),
                        email: Yup.string().email().required('This field is required'),
                        password: Yup.string().required('This field is required'),
                        confirmPassword: Yup.string().when('password', {
                            is: val => (val && val.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref('password')],
                                'Both password need to be the same'
                            )
                        })
                    })}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                        <>
                            <TextInput
                                label='Nom'
                                value={values.nom}
                                onBlur={handleBlur}
                                onChangeText={handleChange('nom')}
                            />
                            {errors.nom &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.nom}</Text>
                            }
                            <TextInput
                                label='Prenom'
                                value={values.prenom}
                                onBlur={handleBlur}
                                onChangeText={handleChange('prenom')}
                            />
                            {errors.prenom &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.prenom}</Text>
                            }
                            <TextInput
                                label='Email'
                                value={values.email}
                                onBlur={handleBlur}
                                onChangeText={handleChange('email')}
                            />
                            {errors.email &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                            }
                            <TextInput
                                label='Password'
                                value={values.password}
                                onBlur={handleBlur}
                                onChangeText={handleChange('password')}
                            />
                            {errors.password &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                            }
                            <TextInput
                                label='confirm Password'
                                value={values.confirmPassword}
                                onBlur={handleBlur}
                                onChangeText={handleChange('confirmPassword')}
                            />
                            {errors.confirmPassword &&
                            <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmPassword}</Text>
                            }
                            <Button disabled={!isValid} style={styles.button} mode="contained" onPress={()=> handleSubmit}>Register</Button>
                        </>
                    )}
                </Formik>
                <Button onPress={() => navigation.navigate('Login')} >Login</Button>
            </>
        </SafeAreaView>
    );
}
