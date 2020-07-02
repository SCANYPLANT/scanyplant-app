import React, { useEffect } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import User from '../models/user';

const styles = StyleSheet.create({
    button: {
        textDecorationColor: '#ffffff',
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10,
    },
});
export default function ProfilScreen({ navigation }) {
    const uDispatch = useDispatch();
    useEffect(() => {
        uDispatch(userActions.me());
    }, []);
    const user: User = useSelector(({ users }: any) => users.user);
    return (
        <>
            <AppBar title="MON COMPTE"/>
            <>
                <Text>Bienvenue </Text>
                <Formik
                    initialValues={{
                        email: user?.email,
                        firstName: user?.firstName,
                        lastName: user?.lastName,
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email().required('This field is required'),
                        firstName: Yup.string().required('This field is required'),
                        lastName: Yup.string().required('This field is required'),
                    })}
                    onSubmit={(values, a,) => {
                        console.log('values ====>=====>====>====>', values);
                    }
                    }
                >
                    {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          errors,
                          touched,
                          isValid,
                      }) => (
                        <>
                            <TextInput
                                label="Nom"
                                onBlur={handleBlur('lastName')}
                                onChangeText={handleChange('lastName')}
                            />
                            {errors.lastName && touched.lastName && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.lastName}
                                </Text>
                            )}
                            <TextInput
                                label="Prenom"
                                onBlur={handleBlur('firstName')}
                                onChangeText={handleChange('firstName')}
                            />
                            {errors.firstName && touched.firstName && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.firstName}
                                </Text>
                            )}
                            <TextInput
                                label="Email"
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')}
                            />
                            {errors.email && touched.email && (
                                <Text style={{ fontSize: 10, color: 'red' }}>
                                    {errors.email}
                                </Text>
                            )}
                            <Button onPress={handleSubmit} mode="contained">
                                Enregistrer
                            </Button>
                        </>
                    )}
                </Formik>
                <Button onPress={() => navigation.navigate('ChangePassword')}>
                    Modifier mon mot de passe
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
