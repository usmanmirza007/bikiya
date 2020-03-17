import React from 'react';
import { StyleSheet, Modal, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, Feather, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import MapView from 'react-native-maps';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class go extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showMe: false,
            chat: true,
        }
    }
    next(){
        if(this.state.chat){
            {this.props.navigation.navigate('chat')}
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/sdwww.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
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
                        <Image source={require('./../image/newicon2.png')} style={{ width: 40, height: 40, marginLeft: wp('5%'), marginTop: hp('8%') }} />

                        <Text style={styles.priceText}>PKR 100 - 120</Text>
                    </View>


                    <TouchableOpacity onPress={
                        () => this.setState({ showMe: true })}
                        style={styles.pickRide}>
                        <Text style={styles.loginButton}>Go</Text>
                        <Modal
                            transparent={true}
                            visible={this.state.showMe}
                            onRequestClose={() => this.setState({ showMe: false })}>
                            <View style={{ flex: 1 }}></View>
                            <View style={{ backgroundColor: '#fff', height: hp('35%'), marginHorizontal: wp('5%') }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={styles.rating}>
                                        <Image source={require('./../image/Profile.png')} style={{ width: 80, height: 80, }} />
                                        <View style={styles.iconStar}>
                                            <Text style={{}}>4.9</Text>
                                            <Entypo
                                                // reverse
                                                name='star'
                                                type='font-awesome'
                                                color='#000'
                                                size={20}
                                                style={{ marginHorizontal: 5 }}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.profile}>
                                        <Text style={styles.bikeNo}>LEM-20-3756</Text>
                                        <Text style={{}}>Red Road Prince RP-70</Text>
                                    </View>
                                </View>
                                <Text style={{ alignSelf: 'center', marginTop: hp('2%') }}>Ghulam Mohi</Text>
                                <View style = {styles.chat}>
                                    <TouchableOpacity onPress = {() => this.props.navigation.navigate('chat')}
                                     style={styles.input}>
                                        <TextInput
                                            placeholder={'Any pickup notes?'}
                                            style={{ marginLeft: 15, fontSize: 15 }}
                                            placeholderTextColor={'#000'} />
                                    </TouchableOpacity>
                                    <View style={styles.iconCall}>
                                        <Ionicons
                                            // reverse
                                            name='ios-call'
                                            type='font-awesome'
                                            color='#000'
                                            size={20}
                                            style={{ marginHorizontal: 5 }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </Modal>

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

    pickRid: {
        position: "absolute",
        marginTop: '142%',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        zIndex: 1,
        height: 60,
        width: wp('100%'),
        alignItems: 'center',
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
        marginTop: hp('3%'),
        height: 50,
        justifyContent: 'center',
        marginLeft: wp('5%'),
        width: wp('60%'),
        borderRadius: 30
    },
    chat:{
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
    }

});