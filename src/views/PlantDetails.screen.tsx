import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider, Subheading, Title } from 'react-native-paper';
import { plantActions } from '../actions';
import Carousel from 'react-native-snap-carousel';
import PlantDetails from '../models/plantDetails';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    detailButton: {
        marginTop: 20,
        width: '80%',
        marginLeft: '10%'
    }
});

export default function PlantDetailsScreen({ route, navigation }) {
    const uDispatch = useDispatch();
    let plant: PlantDetails = useSelector((state: any) => state.plant?.data);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_HEIGHT = Dimensions.get('window').height;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.2);

    const renderItem = ({ item, index }) => <Image source={{ uri: item?.url }} style={{
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        marginBottom: 20
    }}/>;

    useEffect(() => {
        uDispatch(plantActions.getPlantSearch(route.params.myPlant.id));
    }, [route.params.myPlant.id]);
    return (
        <>
            <AppBar title=''/>
            <ScrollView style={styles.container}>
                {plant && (
                    <View>
                        <Carousel
                            data={plant?.images}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            sliderHeight={ITEM_HEIGHT}
                            itemWidth={ITEM_WIDTH}
                        />
                        {plant.common_name != null ?
                            <><Title> Nom :</Title>
                                <Subheading>{plant.common_name}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant.class?.name != null ?
                            <><Title> Nom II :</Title>
                                <Subheading>{plant.class?.name}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant.family?.common_name != null ?
                            <><Title> Famille :</Title>
                                <Subheading>{plant.family?.common_name}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant?.main_species?.growth?.temperature_minimum?.deg_c != null ?
                            <><Title> Temperature min :</Title>
                                <Subheading>{plant?.main_species?.growth?.temperature_minimum?.deg_c}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant?.main_species?.growth?.drought_tolerance != null ?
                            <><Title> Tolerance a la secheresse :</Title>
                                <Subheading>{plant?.main_species?.growth?.drought_tolerance}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant?.duration != null ?
                            <><Title> Durée de vie :</Title>
                                <Subheading>{plant?.duration}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant?.main_species?.specifications?.max_height_at_base_age.cm != null ?
                            <><Title> Longeur maximum :</Title>
                                <Subheading>{plant?.main_species?.specifications?.max_height_at_base_age.cm}</Subheading>
                                <Divider accessibilityStates/></>
                            : <></>}
                        {plant?.main_species?.specifications?.mature_height.cm != null ?
                            <><Title> Longeur age adulte :</Title>
                                <Subheading>{plant?.main_species?.specifications?.mature_height.cm}</Subheading></>
                            : <></>}
                        <Button accessibilityStates mode="contained" style={styles.detailButton}
                                onPress={() => navigation.goBack()}>
                            Retour
                        </Button>
                        <Button accessibilityStates mode="contained" style={styles.detailButton}
                                onPress={() => navigation.navigate('plantProgramming')}>
                            Sélectionner
                        </Button>
                    </View>
                )}
            </ScrollView>
        </>
    );
}
