import React from 'react';
import { StyleSheet, Modal, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, Feather, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import MapView from 'react-native-maps';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class deliverySimple extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMe: false,
            chat: true,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/sdwww.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <AntDesign name='arrowleft' color='#5f5d70' size={30}
                        style={styles.iconViewLeft}
                        onPress={() => this.props.navigation.navigate('home')} />
                    <MapView
                        style={{ flex: 1 }}
                        region={{
                            latitude: 31.563445,
                            longitude: 74.311908,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}>
                        <MapView.Marker
                            coordinate={{
                                latitude: 31.563445,
                                longitude: 74.311908,
                            }}
                            title={'My Marker'}
                            description={'My Marker description'}
                        />
                    </MapView>
                    <View style={styles.pickRid}>
                        <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: hp('3%'), fontWeight: 'bold' }}>Pick Details</Text>
                        <Text style={{ fontSize: 12, marginLeft: wp('5%'), marginTop: hp('3%'), }}>Address Details</Text>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Enter address'}
                                style={{ marginLeft: 15, fontSize: 15 }}
                                placeholderTextColor={'#000'} />
                        </View>
                        <Text style={{ fontSize: 12, marginLeft: wp('5%'), marginTop: hp('3%'), }}>Sender Contact</Text>
                        <View style={styles.sender}>
                            <View style={styles.name}>
                                <AntDesign name='arrowleft' color='#5f5d70' size={30}
                                    style={styles.iconViewLeft}
                                    onPress={() => this.props.navigation.navigate('home')} />
                                <Text>Sender Name</Text>
                            </View>
                            <View style={styles.number}>
                                <Text>03364567895</Text>
                                <AntDesign name='arrowleft' color='#5f5d70' size={30}
                                    style={styles.iconViewLeft}
                                    onPress={() => this.props.navigation.navigate('home')} />

                            </View>
                        </View>

                    </View>

                    <TouchableOpacity onPress={
                        () => this.setState({ showMe: true })}
                        style={styles.pickRide}>
                        <Text style={styles.loginButton}>Confirm</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    iconViewLeft: {
        position: "absolute",
        marginTop: '13%',
        marginHorizontal: wp('5%'),
        zIndex: 1,
    },
    pickRid: {
        position: "absolute",
        marginTop: '85%',
        backgroundColor: '#fff',
        zIndex: 1,
        height: hp('40%'),
        width: wp('100%'),
    },
    pickRide: {
        position: "absolute",
        marginTop: '162%',
        backgroundColor: '#ffd014',
        zIndex: 1,
        height: 60,
        width: wp('100%'),
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#f4f4f8',
        marginTop: hp('2%'),
        height: 50,
        marginLeft: wp('3%'),
        justifyContent: 'center',
        marginHorizontal: wp('5%'),

        borderRadius: 30
    },
    chat: {
        flexDirection: 'row',

    },
    iconCall: {
        marginLeft: wp('4%'),
        padding: 5,
        borderRadius: 50,
        marginTop: hp('3%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f4f4f8',
        width: wp('14%'),
        height: 50,

    },
    loginButton: {
        borderRadius: 30,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '3%',
    },
    price: {
        height: hp('18%'),
        backgroundColor: '#f4f4f8',
        marginBottom: hp('2%')
    },
    priceText: {
        marginTop: hp('10%'),
        marginRight: wp('5%')
    },
    profile: {
        flexDirection: 'column',
        marginTop: hp('3%'),
        marginRight: wp('5%')
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    rating: {
        flexDirection: 'column',
    },
    bikeNo: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    iconStar: {
        flexDirection: 'row',
        marginLeft: wp('4%'),
        padding: 5,
        borderRadius: 30,
        marginTop: -10,
        backgroundColor: '#f4f4f8',
        width: wp('15%'),
        height: hp('5%')
    },
    sender: {
        flexDirection: 'row',
    },
    name: {
        flexDirection: 'row'
    },
    number: {
        flexDirection: 'row'
    }

});