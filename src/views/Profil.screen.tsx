import React, { useEffect } from 'react';
import { Button, Dialog, Paragraph, Portal, Text, TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../actions';
import User from '../models/user';
import { Formik } from 'formik';

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
    let user: User = useSelector(({ users }: any) => users.user);
    useEffect(() => {
        uDispatch(userActions.me());
    }, []);
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);
    return (
        <>
            <AppBar title="MON COMPTE"/>
            {user && (
                <View>
                    <Text accessibilityStates>Bienvenue</Text>
                    <Formik
                        initialValues={{
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email().required('This field is required'),
                            firstName: Yup.string().required('This field is required'),
                            lastName: Yup.string().required('This field is required'),
                        })}
                        onSubmit={values => {
                            console.log('values ====>=====>====>====>', values);
                            uDispatch(userActions.update({
                                id: user.uuid,
                                email: values.email,
                                firstName: values.firstName,
                                lastName: values.lastName
                            }));
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
                                    accessibilityStates
                                    label="Nom"
                                    defaultValue={user.lastName}
                                    onBlur={handleBlur('lastName')}
                                    onChangeText={handleChange('lastName')}
                                />
                                {errors.lastName && touched.lastName && (
                                    <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                        {errors.lastName}
                                    </Text>
                                )}
                                <TextInput
                                    accessibilityStates
                                    label="Prenom"
                                    defaultValue={user.firstName}
                                    onBlur={handleBlur('firstName')}
                                    onChangeText={handleChange('firstName')}
                                />
                                {errors.firstName && touched.firstName && (
                                    <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                        {errors.firstName}
                                    </Text>
                                )}
                                <TextInput
                                    accessibilityStates
                                    label="Email"
                                    defaultValue={user.email}
                                    onBlur={handleBlur('email')}
                                    onChangeText={handleChange('email')}
                                    disabled={true}
                                />
                                {errors.email && touched.email && (
                                    <Text accessibilityStates style={{ fontSize: 10, color: 'red' }}>
                                        {errors.email}
                                    </Text>
                                )}
                                <Button accessibilityStates onPress={handleSubmit} mode="contained">
                                    Enregistrer
                                </Button>
                            </>
                        )}
                    </Formik>
                    <Button accessibilityStates onPress={() => navigation.navigate('ChangePassword')}>
                        Modifier mon mot de passe
                    </Button>
                    <Button
                        accessibilityStates
                        style={styles.button}
                        onPress={() => showDialog()}
                    >
                        Me désinscrire
                    </Button>
                    <Portal>
                        <Dialog visible={visible} onDismiss={hideDialog}>
                            <Dialog.Title accessibilityStates>Me desinscrire</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>This is simple dialog</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions style={{ display:'flex', justifyContent:'space-around'}}>
                                <Button accessibilityStates onPress={hideDialog}>Oui</Button>
                                <Button accessibilityStates onPress={hideDialog}>Non</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            )}
        </>
    );
}
