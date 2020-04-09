import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaView } from 'react-native-safe-area-context';
import splash from './../component/splash';
import signIn from './../component/signIn';
import signUp from './../component/signUp';
import forget from './../component/forget';
import dashBoardButtomTab from './dashBoardButtomTab';
import profile from './../component/profile';
import profileUpdate from './../component/profileUpdate';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
 
    profile: {
        screen: profile,
        navigationOptions: {
            headerShown: false
        },
    },
    profileUpdate: {
        screen: profileUpdate,
        navigationOptions: {
            headerShown: false
        },
    },
    signIn: {
        screen: signIn,
        navigationOptions: {
            headerShown: false
        },
    },
    signUp: {
        screen: signUp,
        navigationOptions: {
            headerShown: false
        },
    },
    splash: {
        screen: splash,
        navigationOptions: {
            headerShown: false
        },
    },
    forget: {
        screen: forget,
        navigationOptions: {
            headerShown: false
        },
    },
    tab: {
        screen: dashBoardButtomTab,
        navigationOptions: {
            headerShown: false
        },
    },
    
    
  },{
    initialRouteName: 'splash'
})

export default createAppContainer(Route);

