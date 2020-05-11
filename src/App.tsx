import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';

import rootThemeStyles from './styles/rootTheme.styles';
import Navigation from './navigation';

export default function App() {
	return (
		<PaperProvider theme={rootThemeStyles}>
			<Navigation />
		</PaperProvider>
	);
}
registerRootComponent(App);
