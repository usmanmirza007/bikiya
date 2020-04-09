import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome5, Feather, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome
                name='user'
                type='font-awesome'
                size={24}
                style={{ color: tintColor }}
                containerStyle={{ width: width(10) }}
            />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/sdwwweeee.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <ScrollView >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', height: 60, }}>
                            <Image source={require('./../image/2.png')} style={{ width: 30, marginLeft: wp('5%'), height: 30, marginTop: hp('2%') }} />
                            <View style={{ flexDirection: 'row', marginRight: wp('5%'), backgroundColor: '#fff', borderColor: '#ccc', marginTop: hp('2%'), borderWidth: 1, padding: 2, height: 30 }}>
                                <Text style={{ marginHorizontal: wp('3%') }}>Logout Delivery</Text>
                                <Feather
                                    name='log-out'
                                    type='font-awesome'
                                    color='#000'
                                    size={20}
                                    style={{ marginRight: wp('3%') }}
                                />
                            </View>
                        </View>
                        <View style={styles.bg2}>
                            <Text style={styles.text}>WELCOME NAME</Text>
                        </View>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={() => this.props.navigation.navigate('profile')} >
                            <Text style={styles.loginText}>Manage Profile</Text>
                        </TouchableOpacity>
                        <View style={styles.main}>
                            <View style={styles.mainBlock}>
                                <View style={styles.textView}>
                                    <Text style={styles.going}>1</Text>
                                    <Text style={styles.going}>ON GOING</Text>
                                </View>
                                <View style={styles.icon}>
                                    <FontAwesome5
                                        name='forward'
                                        type='font-awesome'
                                        color='#000'
                                        size={26}
                                        style={{ marginRight: wp('3%') }}
                                    />
                                </View>
                            </View>
                            <View style={styles.mainBlock}>
                                <View style={styles.textView}>
                                    <Text style={styles.going}>1</Text>
                                    <Text style={styles.going}>COMPLETED</Text>
                                </View>
                                <View style={styles.icon}>
                                    <AntDesign
                                        name='checkcircleo'
                                        type='font-awesome'
                                        color='#000'
                                        size={26}
                                        style={{ marginRight: wp('3%') }}
                                    />
                                </View>
                            </View>
                        </View>
                        <ScrollView horizontal>
                            <View style={styles.scrollView}>
                                <Text style={styles.going}>#GRYERO</Text>
                                <View style={{ borderColor: '#000', borderWidth: 1, padding: 5, marginHorizontal: wp('5%'), }}>
                                    <Text>Completed</Text>
                                </View>
                                <View style={{ borderColor: '#000', borderWidth: 1, padding: 5, marginRight: wp('5%') }}>
                                    <Text>Cash On Delivery Rs. 305.00</Text>
                                </View>
                                <Text style={{ fontSize: 15, }}>Main Market, 43 Gurumangat Rd, Block N Gulberg III, Lahore, Punjab, Pakistan</Text>
                            </View>
                        </ScrollView>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loginButton: {
        padding: 15,
        borderRadius: 5,
        marginLeft: 20,
        width: WIDTH - 200,
        backgroundColor: '#000',
        marginTop: 10,
        marginBottom: -15
    },
    loginText: {
        backgroundColor: 'transparent',
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff',
    },
    bg2: {
        backgroundColor: '#000',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'

    },
    bg3: {
        backgroundColor: '#fff',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    text1: {
        fontSize: 15,
        color: '#000',
    },
    main: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        justifyContent: 'space-between'

    },
    mainBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        width: wp('42%'),
        height: hp('15%'),
        marginTop: hp('5%'),
    },
    textView: {
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    icon: {
        justifyContent: 'center'
    },
    going: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    scrollView: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%')
    }
});