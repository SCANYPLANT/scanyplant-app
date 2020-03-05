import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import Register from './screens/Register';
import Login from './screens/Login';
const AppNavigator = createStackNavigator({
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
                header: null
            }
        },
    },
    {
        initialRouteName: 'Login',
        headerMode: 'float',
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    });

export default createAppContainer(AppNavigator);
