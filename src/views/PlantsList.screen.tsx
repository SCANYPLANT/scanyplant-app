import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Dimensions, Image } from 'react-native';
import { Card, Text, Avatar, Title, Chip } from 'react-native-paper';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { plantActions } from '../actions';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    item: {
        marginHorizontal: 20,
        marginVertical: 10,
        justifyContent: 'center',
    },
    detailLabel: {
        height: 30,
        width: '100%',
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
});

export default function PlantsListScreen({ navigation }) {
    const uDispatch = useDispatch();
    const plants = useSelector((state: any) => state?.plantBDD?.data);
    useEffect(() => {
        uDispatch(plantActions.getAllPlantBDD());
    }, []);
    const plantClick = plant => {
        // console.log('plant click:', plant.fields.raison_sociale);
        navigation.navigate('Discover', { query: plant });
    };

    const SLIDER_WIDTH = Dimensions.get('window').width;
    const SLIDER_HEIGHT = Dimensions.get('window').height;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
    const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.2);
    const emptyInfos = 'Aucune donnée';
    const renderItem = ({ item, index }) =>
        <Image source={{ uri: item?.url }} style={{
            width: ITEM_WIDTH,
            height: ITEM_HEIGHT,
            marginBottom: 20
        }}/>
    ;

    return (
        <>
            <AppBar title="MY PLANTS"/>
            <>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <ScrollView>
                            {plants?.length === 0 && <Text accessibilityStates>Aucune plante pour l'instant</Text>}
                            {plants?.map(plant => {
                                return (
                                    <Card
                                        accessibilityStates
                                        style={styles.item}
                                        key={plant.recordid}
                                    >
                                        <Card.Content
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                width: '100%',
                                                padding: 0,
                                                margin: 0
                                            }}>
                                            <View style={{marginBottom: 20}}>
                                                {plant && plant.images == null &&  <Avatar.Icon
                                                    accessibilityStates
                                                    icon={'flower'}
                                                    size={100}
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        borderRadius: 10,
                                                        display: 'flex',
                                                        alignSelf: 'center',
                                                    }}
                                                /> }
                                                {plant && plant.images && <Carousel
                                                    data={plant.images}
                                                    layout={'stack'}
                                                    renderItem={renderItem}
                                                    sliderWidth={SLIDER_WIDTH}
                                                    sliderHeight={ITEM_HEIGHT}
                                                    itemWidth={ITEM_WIDTH}
                                                />}
                                            </View>
                                            {/* <Avatar.Icon
                                                accessibilityStates
                                                icon={'flower'}
                                                style={{ width: '50%', borderRadius: 0, left: '25%', marginBottom: 10 }}
                                            /> */}
                                            <Chip accessibilityStates icon="flower" style={{backgroundColor:'#57CC99', margin: 5}}>{ plant.name }</Chip>
                                            <Chip accessibilityStates icon="calendar-range" style={{margin: 5}}>Ajouté le: {plant.createdAt}</Chip>
                                            <Chip accessibilityStates icon="white-balance-sunny" style={{backgroundColor:'#f5da6e', margin: 5}}>Luminosité: {plant.brightness}</Chip>
                                            <Chip accessibilityStates icon="water-outline" style={{backgroundColor:'#6ec3f5', margin: 5}}>Prochain arrosage dans {plant.shift} jour(s)</Chip>
                                            <Chip accessibilityStates icon="repeat" style={{margin: 5}}>Repeter tous les {plant.repetition} jours</Chip>
                                            <Text accessibilityStates></Text>
                                        </Card.Content>
                                    </Card>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </>
        </>
    );
}
