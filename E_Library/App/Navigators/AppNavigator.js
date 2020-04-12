import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Home } from '../Containers/Home';
import { Payment } from '../Containers/Payment';
import { CurrentAffairs } from '../Containers/CurrentAffairs';
//import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        {/* <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} /> */}
                    </View>),
            }
        },
        CurrentAffairs: {
            screen: CurrentAffairs,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        {/* <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} /> */}
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#f69b31' },
            }
        },
        Payment: {
            screen: Payment,
            navigationOptions: {
                tabBarLabel: 'History',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        {/* <Icon style={[{ color: tintColor }]} size={25} name={'ios-images'} /> */}
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#67baf6' },
            }
        }
    },
    {
        initialRouteName: "Home",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
    },
);

export default createAppContainer(TabNavigator);  