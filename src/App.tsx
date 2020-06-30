import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';

import rootThemeStyles from './styles/rootTheme.styles';
import Navigation from './navigation';
import { store } from './utils/store';

export default function App() {
	return (
		<Provider store={store}>
			<PaperProvider theme={rootThemeStyles}>
				<Navigation />
			</PaperProvider>
		</Provider>
	);
}
registerRootComponent(App);
