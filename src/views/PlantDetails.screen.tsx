import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Text, Button, Caption, Divider, Subheading, Title, Avatar } from 'react-native-paper';
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
    },
    detailLabel: {
        height: 30,
        backgroundColor: '#57CC99',
        color: '#ffffff',
        paddingLeft: 5,
        fontSize: 17
    },
    viewColumn: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    detailText: {
        paddingLeft: 10
    }
});

export default function PlantDetailsScreen({ route, navigation }) {
    const uDispatch = useDispatch();
    let plant: PlantDetails = useSelector((state: any) => state.plant?.data);

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_HEIGHT = Dimensions.get('window').height;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.2);

    const renderItem = ({ item, index }) =>
        (item.url ? <Image source={{ uri: item?.url }} style={{
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            marginBottom: 20
        }}/> : <Avatar.Icon
            accessibilityStates
            icon={'flower'}
            size={100}
            style={{ width: 80, height: 80, borderRadius: 10 }}
        />)
    ;

    useEffect(() => {
        uDispatch(plantActions.getPlantSearch(route.params.myPlant.id));
    }, [route.params.myPlant.id]);
    return (
        <>
            <AppBar title=''/>
            <View style={styles.container}>
                {plant && (
                    <View>
                        <Carousel
                            data={plant?.images}
                            renderItem={renderItem}
                            sliderWidth={SLIDER_WIDTH}
                            sliderHeight={ITEM_HEIGHT}
                            itemWidth={ITEM_WIDTH}
                        />
                        <ScrollView>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}>Nom : </Title>
                                <Subheading style={styles.detailText}>{plant.common_name != null ? plant.common_name : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}>Nom II :</Title>
                                <Subheading style={styles.detailText}>{plant.class?.name != null ? plant.class?.name : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}>Famille :</Title>
                                <Subheading style={styles.detailText}>{plant.family?.common_name != null ? plant.family?.common_name : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}> Temperature min :</Title>
                                <Subheading style={styles.detailText}>{plant?.main_species?.growth?.temperature_minimum?.deg_c != null ? plant?.main_species?.growth?.temperature_minimum?.deg_c : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}> Tolerance a la secheresse :</Title>
                                <Subheading style={styles.detailText}>{plant?.main_species?.growth?.drought_tolerance != null ? plant?.main_species?.growth?.drought_tolerance : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}> Durée de vie :</Title>
                                <Subheading style={styles.detailText}>{plant?.duration != null ? plant?.duration : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}> Longeur maximum :</Title>
                                <Subheading style={styles.detailText}>{plant?.main_species?.specifications?.max_height_at_base_age.cm != null ? plant?.main_species?.specifications?.max_height_at_base_age.cm : 'Aucune donnée.'}</Subheading>
                            </View>
                            <View style={styles.viewColumn}>
                                <Title style={styles.detailLabel}> Longeur age adulte :</Title>
                                <Subheading style={styles.detailText}>{plant?.main_species?.specifications?.mature_height.cm != null ? plant?.main_species?.specifications?.mature_height.cm : 'Aucune donnée.'}</Subheading>
                            </View>
                        </ScrollView>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch'}}>
                            <Button accessibilityStates
                                    onPress={() => navigation.goBack()}>
                                Retour
                            </Button>
                            <Button accessibilityStates
                                    onPress={() => navigation.navigate('plantProgramming')}>
                                Sélectionner
                            </Button>
                        </View>
                    </View>
                )}
            </View>
        </>
    );
}
