import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class wallet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/dddeeeee.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <View style={styles.bg}>
                        <View style={styles.mainView}>
                            <View style={styles.viewIcon}>
                                <AntDesign
                                    name='arrowleft'
                                    type='font-awesome'
                                    color='#9e9e9e'
                                    size={26}
                                    containerStyle={{}}
                                    onPress={() => this.props.navigation.goBa}
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Wallet</Text>
                            <View style={styles.viewIcon}>
                                <Ionicons
                                    name='ios-print'
                                    type='font-awesome'
                                    color='#9e9e9e'
                                    size={26}
                                    containerStyle={{}}
                                    onPress={() => this.props.navigation.navigate('home')}
                                />
                            </View>
                        </View>
                    </View>
                    <ScrollView >
                        <View style={styles.bg1}>
                            <View style={styles.label}>
                                <Text style={styles.text}>Balance</Text>
                                <Text style={styles.text}>Rs. 100</Text>
                            </View>
                        </View>
                        <View style={styles.bg2}>
                            <View style={styles.label1}>
                                <Text style={styles.text}>TITLE</Text>
                                <Text style={styles.text}>AMOUNT</Text>
                                <Text style={styles.text}>TRANSFER</Text>
                                <Text style={styles.text}>BALANCE</Text>
                            </View>
                        </View>
                        <View style = {styles.bg3}>
                        <View style={styles.label2}>
                            <Text style={styles.text1}>TOP UP</Text>
                            <Text style={styles.text2}>7</Text>
                            <Text style={styles.text3}>7</Text>
                            <Text style={styles.text4}>7</Text>
                        </View>
                        </View>
                        <Text style = {styles.welcome}>Welcome! Enjoy the FREE top up from Bykea!</Text>
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
    viewIcon: {
    },
    bg: {
        backgroundColor: '#f4f4f8',
        height: 60
    },
    mainView: {
        flexDirection: 'row',
        marginTop: hp('3%'),
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
    },
    bg1: {
        backgroundColor: '#ffd014',
        height: 40,
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginTop: hp('1.5%'),
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
    
    text2: {
        fontSize: 15,
        color: '#000',
        marginLeft: wp('10%')
    },
    text3: {
        fontSize: 15,
        color: '#000',
        marginLeft: wp('25%')
    },
    text4: {
        fontSize: 15,
        color: '#000',
        marginLeft: wp('25%')
    },
    bg2: {
        backgroundColor: '#000',
        height: 40,
    },
    label1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: hp('1.5%'),
    },
    bg3:{
        backgroundColor: '#f4f4f8',
        height: 40,
        marginTop: hp('2%')
    }, 
    label2: {
        flexDirection: 'row',
        marginHorizontal: wp('5%'),
        marginTop: hp('1.5%'),
    },
    welcome:{
        fontSize: 11,
        color: '#000',
        marginLeft: wp('5%'),
        marginTop: wp('3%')
    }
}); 