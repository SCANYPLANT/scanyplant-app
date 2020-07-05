import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Camera } from 'expo-camera';
import * as ImageManipulator from "expo-image-manipulator";

export default function CameraScreen({ navigation }) {
	const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);
	const [cameraRef, setCameraRef] = useState(null);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}
	return (
		<View style={{ flex: 1 }}>
			<Camera style={{ flex: 1 }} type={type} ref={ref => {
				setCameraRef(ref) ;
			}}>
				<View
					style={{
						flex: 1,
						backgroundColor: 'transparent',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'flex-end'
					}}
				>
					<TouchableOpacity
						onPress={async() => {
							if(cameraRef){
							  let photo = await cameraRef.takePictureAsync();
							  let result = await ImageManipulator.manipulateAsync(
								photo.uri,
								[],
								{ compress: 0, format: ImageManipulator.SaveFormat.JPEG }
							);
							navigation.navigate('imageIdentification', {
								image: result
							});
							}
						  }}
					>
						<Avatar.Icon
                        accessibilityStates
                        icon={'flower'}
                        size={100}
                        style={{ width: 75, height: 75, borderRadius: 10 ,display:'flex', alignSelf:'center', margin:10}}
                    />
					</TouchableOpacity>
				</View>
			</Camera>
		</View>
	);
}
