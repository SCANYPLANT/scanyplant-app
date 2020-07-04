import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { AppBar } from '../components';
import Plant from '../models/plant';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import { plantActions } from '../actions';
import Carousel from 'react-native-snap-carousel';

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
        flex: 1,
    },
    item: {
        flex: 1,
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
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

    useEffect(() => {
        uDispatch(plantActions.getPlantSearch(route.params.myPlant.id));
        console.log('plant  ========================================================>', plant);
    }, [route.params.myPlant.id]);
    const renderItem = ({ item, index }) => {
        return (
            <Image source={{ uri: item?.url }} style={{ width: ITEM_WIDTH, height: '50%', top: '2%', bottom: '0%' }}/>);
    };
    return (
        <>
            <AppBar title=''/>
            <View style={styles.container}>
                {plant && (
                    <View style={styles.body}>
                        <Carousel
                            style={{ padding: '0' }}
                            data={plant?.images}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                        />
                        <Text> Nom : {plant.common_name}</Text>
                        <Text> Nom II : {plant.class?.name}</Text>
                        <Text> Famille : {plant.family?.common_name}</Text>
                        <Text> Temperature min : {plant?.growth?.temperature_minimum?.deg_c}</Text>
                        <Text> Tolerance a la secheresse : {plant?.growth?.drought_tolerance}</Text>
                        <Text> Durée de vie : {plant?.duration}</Text>
                        <Text> Longeur maximum : {plant?.main_species?.specifications?.max_height_at_base_age.cm}</Text>
                        <Text> Longeur age adulte : {plant?.main_species?.specifications?.mature_height.cm}</Text>
                    </View>
                )}
            </View>
        </>
    );
}
