import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Searchbar, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { AppBar } from '../components';
import { plantActions } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { plant } from '../reducers/plant.reducer';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    body: {
        flex: 3,
    },
    item: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    buttonbox: {
        width: 200,
    },
    fabcamera: {
        position: 'absolute',
        width: '40%',
        left: '5%',
    },
    fabphoto: {
        position: 'absolute',
        width: '40%',
        right: '5%',
    },
});

export default function PlantIdentificationScreen({ navigation }) {
    const [search, setSearch] = useState('');
    const loading = useSelector((state: any) => state.searchPlant.loading);
    const uDispatch = useDispatch();

    const searchPlant = (text) => {
        setSearch(text);

    };
    // comment avoir les informations d'une plante
    useEffect(() => {
        console.log(loading)
        if (loading === true) {
            navigation.navigate('identificationResult');
        }
    }, [loading]);
    const handleSearch = () => {
        uDispatch(plantActions.searchPlantByName(search));
    };
    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
            });
            if (!result.cancelled) {
                {
                    navigation.navigate('imageIdentification', {
                        image: result
                    });
                }
            }
        } catch (E) {
            console.log(E);
        }
    };

    return (
        <>
            <AppBar title="Identifier une plante"/>
            <>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Searchbar
                            placeholder="Nom de la plante"
                            onChangeText={text => searchPlant(text)}
                            accessibilityStates
                            value={search}
                            icon={() => <MaterialCommunityIcon name="flower" size={30}/>}
                            onIconPress={() => handleSearch()}
                        />
                        <Text accessibilityStates> {search}</Text>
                    </View>
                    <View style={styles.body}>
                        <Button
                            accessibilityStates
                            style={styles.fabcamera}
                            mode="contained"
                            icon="camera"
                            onPress={() => navigation.navigate('Camera')}
                        >
                            Caméra
                        </Button>
                        <Button
                            accessibilityStates
                            style={styles.fabphoto}
                            mode="contained"
                            icon="image"
                            onPress={pickImage}
                        >
                            Galerie
                        </Button>
                    </View>
                </View>
            </>
        </>
    );
}
