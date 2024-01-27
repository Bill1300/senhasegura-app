import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='home'
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: 'rgba(0, 48, 100, 1.0)',
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='cog'></Ionicons>
                        } else {
                            return <Ionicons size={size} color={color} name='cog-outline'></Ionicons>
                        }
                    }
                }}
            />
            <Tab.Screen
                name='passwords'
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarActiveTintColor: 'rgba(0, 48, 100, 1.0)',
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused){
                            return <Ionicons size={size} color={color} name='lock-closed'></Ionicons>
                        } else {
                            return <Ionicons size={size} color={color} name='lock-closed-outline'></Ionicons>
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}