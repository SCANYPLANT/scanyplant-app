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

export default function ChangePasswordScreen({ navigation }) {
    return (
        <>
            <AppBar title="CHANGE PASSWORD"/>
            <>
                <Formik
                    initialValues={{
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={Yup.object().shape({
                        password: Yup.string().email().required('This field is required'),
                        confirmPassword: Yup.string().required('This field is required'),
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
                            <TextInput accessibilityStates
                                       label="Password"
                                       value={values.password}
                                       onBlur={handleBlur}
                                       onChangeText={handleChange('password')}
                            />
                            {errors.password && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.password}
                                </Text>
                            )}
                            <TextInput accessibilityStates
                                       label="Confirm Password"
                                       value={values.confirmPassword}
                                       onBlur={handleBlur('confirmPassword')}
                                       secureTextEntry={true}
                                       onChangeText={handleChange('confirmPassword')}
                            />
                            {errors.confirmPassword && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.confirmPassword}
                                </Text>
                            )}
                            <Button accessibilityStates
                                    disabled={!isValid}
                                    style={styles.button}
                                    mode="contained"
                            >
                                <Text accessibilityStates>Change Password</Text>
                            </Button>
                        </>
                    )}
                </Formik>
            </>
        </>
    );
}
