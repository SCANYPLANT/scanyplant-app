import React from 'react';
import { Button, Card, TextInput } from 'react-native-paper';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const styles = StyleSheet.create({
    button: {
        textDecorationColor: "#ffffff",
        marginLeft: 20,
        marginRight: 20,
        marginVertical: 10
    },
});

export default function RegisterScreen({navigation}) {

    const userForm = useFormik({
        initialValues: {
            nom: "",
            prenom: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object().shape({
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
        }),
        onSubmit: values => {
           console.log(values)
        }
    })

    return (
        <SafeAreaView>
                <form>
                    <TextInput
                        label='Nom'
                        value={ userForm.values.nom}
                        onBlur={userForm.handleBlur}
                        onChangeText={userForm.handleChange}
                    />
                    <span className="error" style={{color: "red"}}>{userForm.errors.nom}</span>
                    <TextInput
                        label='Prenom'
                        value={ userForm.values.prenom}
                        onBlur={userForm.handleBlur}
                        onChangeText={userForm.handleChange}
                    />
                    <span className="error" style={{color: "red"}}>{userForm.errors.prenom}</span>
                    <TextInput
                        label='Email'
                        value={ userForm.values.email}
                        onBlur={userForm.handleBlur}
                        onChangeText={userForm.handleChange}
                    />
                    <span className="error" style={{color: "red"}}>{userForm.errors.email}</span>
                    <TextInput
                        label='Password'
                        value={ userForm.values.password}
                        onBlur={userForm.handleBlur}
                        onChangeText={userForm.handleChange}
                    />
                    <span className="error" style={{color: "red"}}>{userForm.errors.password}</span>
                    <TextInput
                        label='confirm Password'
                        value={ userForm.values.confirmPassword}
                        onBlur={userForm.handleBlur}
                        onChangeText={userForm.handleChange}
                    />
                    <span className="error" style={{color: "red"}}>{userForm.errors.confirmPassword}</span>
                    <Button  disabled={!userForm.isValid}>
                        Register
                    </Button>
                </form>
                <Button style={styles.button} mode="contained" >Cancel</Button>
                <Button style={styles.button} mode="contained" onPress={navigation.navigate('Login')}  >Login</Button>
        </SafeAreaView>
    );
}
