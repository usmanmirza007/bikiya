import {createStackNavigator} from 'react-navigation-stack';
import {SafeAreaView } from 'react-native-safe-area-context';
import splash from './../component/splash';
import signIn from './../component/signIn';
import signUp from './../component/signUp';
import forget from './../component/forget';
import verification from './../component/verification';
import home from './../component/home';
import map from './../component/map';
import go from './../component/go';
import chat from './../component/chat';
import wallet from './../component/wallet';
import profile from './../component/profile';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const Route =  createStackNavigator({
    
    
    profile: {
        screen: profile,
        navigationOptions: {
            headerShown: false
        },
    },
    wallet: {
        screen: wallet,
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
    verification: {
        screen: verification,
        navigationOptions: {
            headerShown: false
        },
    },
    home: {
        screen: home,
        navigationOptions: {
            headerShown: false
        },
    },
    map: {
        screen: map,
        navigationOptions:  {
            header: null,
        }
    },
    go: {
        screen: go,
        navigationOptions:  {
            header: null,
        }
    },
    chat: {
        screen: chat,
        navigationOptions:  {
            header: null,
        }
    },
    
  },{
    initialRouteName: 'splash'
})

export default createAppContainer(Route);

