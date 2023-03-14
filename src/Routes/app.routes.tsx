import { createStackNavigator  } from '@react-navigation/stack';

import Welcome from '../pages/Welcome';
import Home from '../pages/Home';
import AboutPokemon from '../pages/AboutPokemon';

const Stack = createStackNavigator();

export default function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="About" component={AboutPokemon} />
        </Stack.Navigator>
    )
}
