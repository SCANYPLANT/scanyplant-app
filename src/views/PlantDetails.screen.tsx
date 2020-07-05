import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, View, ScrollView } from 'react-native';
import { AppBar } from '../components';
import Plant from '../models/plant';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Button, Divider, Title, Subheading } from 'react-native-paper';
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
    detailButton: {
        marginTop: 20,
        width: '80%',
        marginLeft: '10%'
    }
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
            <Image source={{ uri: item?.url }} style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, marginBottom: 20}}/>);
    };
    return (
        <>
            <AppBar title=''/>
            <ScrollView style={styles.container}>
                {plant && (
                    <View style={styles.body}>
                        <Carousel
                            data={plant?.images}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            sliderHeight={ITEM_HEIGHT}
                            itemWidth={ITEM_WIDTH}
                        />
                        {plant.common_name != null ? 
                            <><Title accessibilityStates> Nom :</Title> 
                            <Subheading accessibilityStates>{plant.common_name}</Subheading>
                            <Divider /></>
                        : <></>}
                        {plant.class?.name != null ? 
                            <><Title accessibilityStates> Nom II :</Title> 
                            <Subheading accessibilityStates>{plant.class?.name}</Subheading>
                            <Divider /></>
                        : <></>}
                            {plant.family?.common_name != null ? 
                            <><Title accessibilityStates> Famille :</Title> 
                            <Subheading accessibilityStates>{plant.family?.common_name}</Subheading>
                            <Divider /></>
                        : <></>}
                        {plant?.growth?.temperature_minimum?.deg_c != null ? 
                            <><Title accessibilityStates> Temperature min :</Title> 
                            <Subheading accessibilityStates>{plant?.growth?.temperature_minimum?.deg_c}</Subheading>
                            <Divider /></>
                        : <></>}
                        {plant?.growth?.drought_tolerance != null ? 
                            <><Title accessibilityStates> Tolerance a la secheresse :</Title> 
                            <Subheading accessibilityStates>{plant?.growth?.drought_tolerance}</Subheading>
                            <Divider /></>
                        : <></>}
                        {plant?.duration != null ? 
                            <><Title accessibilityStates> Durée de vie :</Title> 
                            <Subheading accessibilityStates>{plant?.duration}</Subheading>
                            <Divider /></>
                        : <></>}
                        {plant?.main_species?.specifications?.max_height_at_base_age.cm != null ? 
                            <><Title accessibilityStates> Longeur maximum :</Title> 
                            <Subheading accessibilityStates>{plant?.main_species?.specifications?.max_height_at_base_age.cm}</Subheading>
                            <Divider /></>
                        : <></>}
                        {plant?.main_species?.specifications?.mature_height.cm != null ? 
                            <><Title accessibilityStates> Longeur age adulte :</Title> 
                            <Subheading accessibilityStates>{plant?.main_species?.specifications?.mature_height.cm}</Subheading></>
                        : <></>}
                        <Button accessibilityStates mode="contained" style={styles.detailButton} onPress={() => navigation.goBack()}>
							Retour
						</Button>
						<Button accessibilityStates mode="contained" style={styles.detailButton} onPress={() => navigation.navigate('plantProgramming')} >
							Sélectionner
						</Button>
                    </View>
                )}
            </ScrollView>
        </>
    );
}
