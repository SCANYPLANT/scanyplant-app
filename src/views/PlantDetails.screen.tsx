import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { AppBar } from '../components';
import Plant from '../models/plant';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Button } from 'react-native-paper';
import { plantActions } from '../actions';
import Carousel from 'react-native-snap-carousel';
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        justifyContent: 'center',
        paddingHorizontal: 50,
    },
    body: {
    },
    item: {
        marginHorizontal: 20,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
});

export default function PlantDetailsScreen({ route, navigation }) {
    const uDispatch = useDispatch();
    let plant: Plant = useSelector((state: any) => state.plant?.data);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_HEIGHT = Dimensions.get('window').height;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.2);

    useEffect(() => {
        uDispatch(plantActions.getPlantSearch(route.params.myPlant.id));
        console.log('plant  ========================================================>', plant);
    }, [route.params.myPlant.id]);
    const renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item?.url }} style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, top: '2%', backgroundColor: 'black' }}/>);
    };
    return (
        <>
            <AppBar title=''/>
            <View style={styles.container}>
                {plant && (
                    <View style={styles.body}>
                        <Carousel
                            style={{ backgroundColor: 'black', marginBottom: 20}}
                            data={plant?.images}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            sliderHeight={ITEM_HEIGHT}
                            itemWidth={ITEM_WIDTH}
                        />
                        <Text accessibilityStates> Nom : {plant.common_name}</Text>
                        <Text accessibilityStates> Nom II : {plant.class?.name}</Text>
                        <Text accessibilityStates> Famille : {plant.family?.common_name}</Text>
                        <Text accessibilityStates> Temperature min : {plant?.growth?.temperature_minimum?.deg_c}</Text>
                        <Text accessibilityStates> Tolerance a la secheresse : {plant?.growth?.drought_tolerance}</Text>
                        <Text accessibilityStates> Durée de vie : {plant?.duration}</Text>
                        <Text accessibilityStates> Longeur maximum : {plant?.main_species?.specifications?.max_height_at_base_age.cm}</Text>
                        <Text accessibilityStates> Longeur age adulte : {plant?.main_species?.specifications?.mature_height.cm}</Text>
                        <Button accessibilityStates mode="contained" style={styles.buttonback} onPress={() => navigation.goBack()}>
							Retour
						</Button>
						<Button accessibilityStates mode="contained" onPress={() => navigation.navigate('plantProgramming')} >
							Sélectionner
						</Button>
                    </View>
                )}
            </View>
        </>
    );
}
