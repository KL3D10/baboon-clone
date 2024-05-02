import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import VectorIcon from '../utils/VectorIcon'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'

const AppNavigator = () => {
    const Stack = createStackNavigator()
    const Tab = createBottomTabNavigator()
    // const BottomTabs = () => {
    //     return(
    //         <Tab.Navigator>
    //             <Tab.Screen 
    //                 name='Home'
    //                 component={HomeScreen}
    //                 options={{
    //                     tabBarLabel: 'Home',
    //                     tabBarLabelStyle: {color: "#008E97"},
    //                     headerShown: false,
    //                     tabBarIcon:({focused}) => 
    //                     focused  ? (
    //                         <VectorIcon type='Entypo' name="home" size={24} color="#008E97" />
    //                     ) : (
    //                         <VectorIcon type='AntDesign' name="home" size={24} color="black" />
    //                     )
    //                 }}
    //             />

    //              <Tab.Screen
    //                 name="Profile"
    //                 component={ProfileScreen}
    //                 options={{
    //                     tabBarLabel: "Profile",
    //                     tabBarLabelStyle: { color: "#008E97" },
    //                     tabBarIcon: ({ focused }) =>
    //                     focused ? (
    //                         <VectorIcon type='Ionicons' name="ios-person" size={24} color="#008E97" />
    //                     ) : (
    //                         <VectorIcon type='Ionicons' name="person-outline" size={24} color="black" />
    //                     ),
    //                 }}
    //                 />

    //                 <Tab.Screen
    //                 name="Cart"
    //                 component={CartScreen}
    //                 options={{
    //                     tabBarLabel: "Cart",
    //                     tabBarLabelStyle: { color: "#008E97" },
    //                     headerShown: false,
    //                     tabBarIcon: ({ focused }) =>
    //                     focused ? (
    //                         <VectorIcon type='AntDesign' name="shoppingcart" size={24} color="#008E97" />
    //                     ) : (
    //                         <VectorIcon type='AntDesign' name="shoppingcart" size={24} color="black" />
    //                     ),
    //                 }}
    //                 />
    //         </Tab.Navigator>
    //     )
    // }
    const HomeStack = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
                {/* <Stack.Screen name='Register' component={RegisterScreen} options={{headerShown: false}}/>
                <Stack.Screen name='Main' component={BottomTabs} options={{headerShown: false}}/>
                <Stack.Screen name='Info' component={ProductInfoAcreen} options={{headerShown: false}}/> */}
            </Stack.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Home'
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Zbulo',
                        tabBarLabelStyle: { color: "#fb2c48", fontSize: 12 },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="planet-outline" size={24} color="#fb2c48" />
                            ) : (
                                <VectorIcon type='Ionicons' name="planet-outline" size={24} color="#727272" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Search'
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Kerko',
                        tabBarLabelStyle: { color: "#fb2c48", fontSize: 12 },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="search" size={24} color="#fb2c48" />
                            ) : (
                                <VectorIcon type='Ionicons' name="search" size={24} color="#727272" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Shops'
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Dyqanet',
                        tabBarLabelStyle: { color: "#fb2c48", fontSize: 12 },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="storefront-outline" size={24} color="#fb2c48" />
                            ) : (
                                <VectorIcon type='Ionicons' name="storefront-outline" size={24} color="#727272" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Offers'
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Ulje per ty',
                        tabBarLabelStyle: { color: "#fb2c48", fontSize: 12 },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type="Fontisto" name="shopping-sale" size={24} color="#fb2c48" />
                            ) : (
                                <VectorIcon type="Fontisto" name="shopping-sale" size={24} color="#727272" />
                            )
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={HomeStack}
                    options={{
                        tabBarLabel: 'Profili',
                        tabBarLabelStyle: { color: "#fb2c48", fontSize: 12 },
                        headerShown: false,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <VectorIcon type='Ionicons' name="person-circle-outline" size={24} color="#fb2c48" />
                            ) : (
                                <VectorIcon type='Ionicons' name="person-circle-outline" size={24} color="#727272" />
                            )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator