import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Avatar, Button, Card, Colors, Text } from 'react-native-paper';
import { AppBar } from '../components';
import { useSelector } from 'react-redux';
import Plant from '../models/plant';

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
        marginHorizontal: 10,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 0,
        justifyContent: 'center',
    },
    detailButton: {
        marginTop: 20,
        width: '40%',
        marginLeft: '5%'
    },
});

export default function IdentificationResultScreen({ route, navigation }) {
    let plants: [Plant] = useSelector((state: any) => state.searchPlant?.data);
    const [pagination, setPagination] = useState(4);
    const plantClick = plant => navigation.navigate('plantDetails', { myPlant: plant });

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
                            {plants && (plants?.length === 0) &&
                            <Text accessibilityStates lineBreakMode={'middle'}> Aucune Donnée </Text>}
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
                                                justifyContent: 'space-around'

                                            }}>
                                            <Avatar.Icon
                                                accessibilityStates
                                                icon={'flower'}
                                                size={100}
                                                style={{ width: 80, height: 80, borderRadius: 10 }}
                                            />
                                            <View style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                <Text accessibilityStates
                                                      lineBreakMode={'middle'}>{plant.common_name}</Text>
                                                <Text accessibilityStates> {plant.scientific_name}</Text>
                                            </View>
                                        </Card.Content>
                                    </Card>
                                );
                            })}
                        </ScrollView>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginBottom: 10
                        }}>
                            <Button accessibilityStates style={styles.detailButton}
                                    onPress={() => navigation.goBack()}> Back</Button>
                            {
                                plants?.length >= pagination &&
                                <Button accessibilityStates style={styles.detailButton}
                                        onPress={() => setPagination(pagination + 2)}> Plus</Button>
                            }

                        </View>

                    </View>
                </View>
            </>
        </>
    );
}
