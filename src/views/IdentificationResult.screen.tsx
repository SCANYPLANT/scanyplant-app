import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Colors, Text } from 'react-native-paper';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import Plant from '../models/plant';
import { CardCover } from 'react-native-paper/lib/typescript/src/components/Card/CardCover';

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
});

export default function IdentificationResultScreen({ route, navigation }) {
    const uDispatch = useDispatch();
    let plants: [Plant] = useSelector((state: any) => state.searchPlant?.data);
    const [pagination, setPagination] = useState(4);

    console.log('======', plants && plants);


    const plantClick = plant => {
        // console.log('plant click:', plant.fields.raison_sociale);
        navigation.navigate('plantDetails', { myPlant: plant });
    };

    return (
        <>
            <AppBar title="MY PLANTS"/>
            <>
                <View style={styles.container}>
                    {/*<View style={styles.header}>*/}
                    {/*	<Searchbar*/}
                    {/*		placeholder="Search"*/}
                    {/*		onChangeText={text => setSearch(text)}*/}
                    {/*		value={search}*/}
                    {/*	/>*/}
                    {/*</View>*/}
                    <View style={styles.body}>
                        <ScrollView>
                            {!plants && <ActivityIndicator accessibilityStates animating={true} color={Colors.red800}/>}
                            {plants && plants.slice(0, pagination).map(plant => {
                                return (
                                    <Card
                                        style={styles.item}
                                        key={plant.id}
                                        accessibilityStates
                                        onPress={() => plantClick(plant)}
                                    >
                                        <Card.Content
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent:'space-around'

                                            }}>
                                            <Card.Cover
                                                accessibilityStates
                                                source={{ uri: 'https://lh3.googleusercontent.com/proxy/-p7q4yG_6AP2RZMs5vvl_D-UVeP_UfMMYVBKB6bb1N04Bdlrp9HvKVNFIQH1GLiKAxI6niIP7O3D8m4W-niJ1cPrpwttYnxDXD9vHOJHRkJjtF4aSgE' }}
                                                style={{ width: 80, height: 80, borderRadius: 10 }}
                                            />
                                            <View style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <Text accessibilityStates lineBreakMode={'middle'}>{plant.common_name}</Text>
                                                <Text accessibilityStates> {plant.scientific_name}</Text>
                                            </View>
                                        </Card.Content>
                                    </Card>
                                );
                            })}
                        </ScrollView>
                        {
                            plants?.length >= pagination && <Button accessibilityStates onPress={() => setPagination(pagination+2)}> Next</Button>
                        }

                    </View>
                </View>
            </>
        </>
    );
}
