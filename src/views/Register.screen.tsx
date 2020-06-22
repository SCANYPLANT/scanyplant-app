import React from 'react';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import CardContent from 'react-native-paper/lib/typescript/src/components/Card/CardContent';


const styles = StyleSheet.create({
    button: {
        textDecorationColor: "#ffffff",
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
});

export default function RegisterScreen({navigation}) {

    return (
        <SafeAreaView>
            <Formik
                initialValues={{
                    nom: "",
                    prenom: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                }}
                validationSchema={Yup.object().shape({
                    nom: Yup.string().required("This field is required"),
                    prenom: Yup.string().required("This field is required"),
                    email: Yup.string().email().required("This field is required"),
                    password: Yup.string().required("This field is required"),
                    confirmPassword: Yup.string().when("password", {
                        is: val => (val && val.length > 0 ? true : false),
                        then: Yup.string().oneOf(
                            [Yup.ref("password")],
                            "Both password need to be the same"
                        )
                    })
                })}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                <Card.Content>
                    <TextInput
                        label='Nom'
                        value={ values.nom}
                        onBlur={handleBlur}
                        onChangeText={handleChange('nom')}
                    />
                    {errors.nom &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.nom}</Text>
                    }
                    <TextInput
                        label='Prenom'
                        value={ values.prenom}
                        onBlur={handleBlur}
                        onChangeText={handleChange('prenom')}
                    />
                    {errors.prenom &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.prenom}</Text>
                    }
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
                    <TextInput
                        label='confirm Password'
                        value={ values.confirmPassword}
                        onBlur={handleBlur}
                        onChangeText={handleChange('confirmPassword')}
                    />
                    {errors.confirmPassword &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmPassword}</Text>
                    }
                    <Button disabled={!isValid}>Register</Button>
                </Card.Content>
                )}
            </Formik>
                {/*<Button style={styles.button} mode="contained" >Cancel</Button>*/}
                {/*<Button style={styles.button} mode="contained" onPress={navigation.navigate('Login')}  >Login</Button>*/}
        </SafeAreaView>
    );
}
