import React, { useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { readStorage } from '../utils/storage';
import { useDispatch, useSelector } from 'react-redux';

const styles = StyleSheet.create({
    button: {
        textDecorationColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10,
    },
});

export default function ChangePasswordScreen({ navigation }) {
    const uDispatch= useDispatch()
   // useSelector(state => console.log(state))
    return (
        <>
            <AppBar title="CHANGE PASSWORD"/>
                <Formik
                    initialValues={{
                        password: '',
                        confirmPassword: '',
                    }}
                    validationSchema={Yup.object().shape({
                        password: Yup.string().required('This field is required'),
                        confirmPassword: Yup.string().when('password', {
                            is: val => (!!(val && val.length > 0)),
                            then: Yup.string().oneOf(
                                [Yup.ref('password')],
                                'Both password need to be the same',
                            ),
                        }),
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
                          touched
                      }) => (
                        <>
                            <TextInput accessibilityStates
                                       label="Password"
                                       secureTextEntry={true}
                                       value={values.password}
                                       onBlur={handleBlur('password')}
                                       onChangeText={handleChange('password')}
                            />
                            {errors.password && touched.password && (
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
                            {errors.confirmPassword && touched.confirmPassword && (
                                <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                    {errors.confirmPassword}
                                </Text>
                            )}
                            <Button accessibilityStates
                                    disabled={!isValid}
                                    style={styles.button}
                                    mode="contained"
                                    onPress={handleSubmit}
                            >Change Password</Button>
                        </>
                    )}
                </Formik>
        </>
    );
}
