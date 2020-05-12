import React, { useEffect } from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm } from "react-hook-form";

export default function RegisterScreen() {
    const { register, setValue, handleSubmit, errors } = useForm();
    const onSubmit = data => Alert.alert("Register Form Data", JSON.stringify(data));

    useEffect(() => {
        register({ name: "nom" }, { required: true });
        register({ name: "prenom" }, { required: true });
        register({ name: "email" }, { required: true });
        register({ name: "password" }, { required: true });
        register({ name: "confirmPassword" }, { required: true });

    }, [register]);

    return (
        <View>

            <TextInput textContentType="familyName" placeholder="Nom *" onChangeText={text => setValue("nom", text, true)} />
            {errors.nom && <Text>This is required.</Text>}

            <TextInput textContentType="givenName" placeholder="Prénom *" onChangeText={text => setValue("prenom", text, true)} />
            {errors.prenom && <Text>This is required.</Text>}

            <TextInput textContentType="emailAddress" placeholder="Email *" onChangeText={text => setValue("mail", text, true)} />
            {errors.email && <Text>This is required.</Text>}

            <TextInput textContentType="password" placeholder="Mot de passe *" secureTextEntry={true} onChangeText={text => setValue("password", text, true)} />
            {errors.password && <Text>This is required.</Text>}

            <TextInput textContentType="password" placeholder="Confirmer mot de passe *" secureTextEntry={true} onChangeText={text => setValue("confirmPassword", text, true)} />
            {errors.confirmPassword && <Text>This is required.</Text>}
      />

            <Button title="INSCRIPTION" onPress={handleSubmit(onSubmit)} />
        </View>
    );
}