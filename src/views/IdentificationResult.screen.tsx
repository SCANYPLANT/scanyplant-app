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
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10
    },
});

export default function IdentificationResultScreen({ route, navigation }) {
    let plants: [Plant] = useSelector((state: any) => state.searchPlant?.data);
    const [pagination, setPagination] = useState(4);
    const plantClick = plant => navigation.navigate('plantDetails', { myPlant: plant });

    const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
          contentSize.height - paddingToBottom;
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
                        <ScrollView 
                            onScroll={({nativeEvent}) => {
                            if (isCloseToBottom(nativeEvent)) {
                                setPagination(pagination + 2);
                            }
                        }}>
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
                                                justifyContent: 'space-around',
                                                padding: 0,
                                                margin: 0
                                            }}>
                                            <Avatar.Icon
                                                accessibilityStates
                                                icon={'flower'}
                                                size={70}
                                                style={{ width: '20%', height: 70, borderRadius: 0 }}
                                            />
                                            <View style={{ width: '75%', right: 0, left: 10 }}>
                                                <Text accessibilityStates lineBreakMode={'middle'}>Plante: {plant.scientific_name} {plant.common_name}</Text>
                                            </View>
                                        </Card.Content>
                                    </Card>
                                );
                            })}
                        </ScrollView>
                        <View>
                            <Button accessibilityStates style={styles.detailButton} onPress={() => navigation.goBack()}> Back</Button>
                        </View>
                    </View>
                </View>
            </>
        </>
    );
}
