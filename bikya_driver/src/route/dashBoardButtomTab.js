import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import newOder from '../component/newOder';
import account from './../component/account';
import accpted from '../component/accpted';

const TabScreens = createMaterialBottomTabNavigator({
    newOder:{
        screen: newOder,
        navigationOptions:  {
            title:'New Order',
        }
    },
    accpted:{
        screen: accpted,
        navigationOptions:  {
            title:'Accepted',
        }
    },
    account:{
        screen: account,
        navigationOptions:  {
            title:'Account',
        }
    },
}, {
    order: [  'newOder', 'accpted', 'account'],
    initialRouteName: 'newOder',
    activeColor: '#e8f021',
    inactiveColor: '#9e9e9e',
    barStyle: { backgroundColor: '#fff' },
  },);

export default (TabScreens);