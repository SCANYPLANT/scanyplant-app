import React, { useEffect } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View } from 'react-native';
import { AppBar } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Button, Subheading, Title } from 'react-native-paper';
import { plantActions } from '../actions';
import Carousel from 'react-native-snap-carousel';
import PlantDetails from '../models/plantDetails';

const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	header: {
		justifyContent: 'center',
		paddingHorizontal: 50,
	},
	detailButton: {
		marginTop: 20,
		marginBottom: 20,
		width: '40%',
		marginLeft: '5%',
	},
	detailLabel: {
		height: 30,
		backgroundColor: '#57CC99',
		color: '#ffffff',
		paddingLeft: 5,
		fontSize: 17,
	},
	viewColumn: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'stretch',
	},
	detailText: {
		paddingLeft: 10,
	},
	detailTextNull: {
		paddingLeft: 10,
		fontSize: 12,
		color: '#757575',
	},
});

export default function PlantDetailsScreen({ route, navigation }) {
	const uDispatch = useDispatch();
	let plant: PlantDetails = useSelector((state: any) => state.plant?.data);

	const SLIDER_WIDTH = Dimensions.get('window').width;
	const SLIDER_HEIGHT = Dimensions.get('window').height;
	const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
	const ITEM_HEIGHT = Math.round(SLIDER_HEIGHT * 0.2);
	const emptyInfos = 'Aucune donnée';
	const renderItem = ({ item, index }) => (
		<Image
			source={{ uri: item?.url }}
			style={{
				width: ITEM_WIDTH,
				height: ITEM_HEIGHT,
				marginBottom: 20,
			}}
		/>
	);
	const isEmptyData = data => {
		if (data) {
			return (
				<Subheading style={styles.detailText}>{plant.class?.name}</Subheading>
			);
		} else {
			return (
				<Subheading style={styles.detailTextNull}>{emptyInfos}</Subheading>
			);
		}
	};
	useEffect(() => {
		uDispatch(plantActions.getPlantSearch(route.params.myPlant.id));
	}, [route.params.myPlant.id]);
	return (
		<>
			<AppBar title={plant != null ? plant.class?.name : 'Aucune donnée.'} />
			{plant && (
				<View style={styles.container}>
					<View style={{ marginBottom: 20 }}>
						{plant && plant.images.length === 0 && (
							<Avatar.Icon
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
							/>
						)}
						{plant && plant.images && (
							<Carousel
								data={plant.images}
								layout={'stack'}
								renderItem={renderItem}
								sliderWidth={SLIDER_WIDTH}
								sliderHeight={ITEM_HEIGHT}
								itemWidth={ITEM_WIDTH}
							/>
						)}
					</View>
					<ScrollView style={{}}>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}>Nom : </Title>
							{isEmptyData(plant.common_name)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}>Nom II :</Title>
							{isEmptyData(plant.class?.name)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}>Famille :</Title>
							{isEmptyData(plant.family?.common_name)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}> Temperature min :</Title>
							{isEmptyData(
								plant?.main_species?.growth?.temperature_minimum?.deg_c,
							)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}> Temperature max :</Title>
							{isEmptyData(
								plant?.main_species?.growth?.temperature_maximum?.deg_c,
							)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}>
								{' '}
								Tolerance a la secheresse :
							</Title>
							{isEmptyData(plant?.main_species?.growth?.drought_tolerance)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}> Durée de vie :</Title>
							{isEmptyData(plant?.duration)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}> Longeur maximum :</Title>
							{isEmptyData(
								plant?.main_species?.specifications?.max_height_at_base_age.cm,
							)}
						</View>
						<View style={styles.viewColumn}>
							<Title style={styles.detailLabel}> Longeur age adulte :</Title>
							{isEmptyData(
								plant?.main_species?.specifications?.max_height_at_base_age.cm,
							)}
						</View>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								alignItems: 'center',
							}}
						>
							<Button
								accessibilityStates
								style={styles.detailButton}
								mode="contained"
								onPress={() => navigation.goBack()}
							>
								Retour
							</Button>
							<Button
								accessibilityStates
								style={styles.detailButton}
								mode="contained"
								onPress={() => navigation.navigate('plantProgramming')}
							>
								Sélectionner
							</Button>
						</View>
					</ScrollView>
				</View>
			)}
		</>
	);
}
