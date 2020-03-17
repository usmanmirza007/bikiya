/* import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class delivery extends React.Component {
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
                    <ScrollView >
                        <View style={styles.viewIcon}>
                            <AntDesign
                                name='arrowleft'
                                type='font-awesome'
                                color='#9e9e9e'
                                size={26}
                                containerStyle={{}}
                                onPress={() => this.props.navigation.navigate('home')}
                            />
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('deliverySimple')}
                         style={styles.deliveryView}>
                            <Image source={require('./../image/download.jpg')} style={{ width: 150, height: 148, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }} />
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('deliveryCash')}
                         style={styles.deliveryView}>
                            <Image source={require('./../image/download.jpg')} style={{ width: 150, height: 148, borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }} />
                            <Text style={styles.deliveryText1}>Cash on{'\n'}Delivery</Text>
                        </TouchableOpacity>
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
        marginTop: hp('3%'),
        marginLeft: wp('5%')
    },
    deliveryView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp('10%'),

    },
    deliveryText: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        borderRightColor: '#ccc',
        borderRightWidth: 2,
        borderTopColor: '#ccc',
        borderTopWidth: 2,
        padding: 60,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    deliveryText1: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        borderRightColor: '#ccc',
        borderRightWidth: 2,
        borderTopColor: '#ccc',
        borderTopWidth: 2,
        paddingBottom: 50,
        paddingTop: 50,
        paddingLeft: 60, 
        paddingRight: 60,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
}); */


//##################################################### new class #############################################

import React from 'react';
import { StyleSheet, Modal, Text, View, TextInput, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons, Feather, Entypo, AntDesign, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import MapView from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class delivery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={require('./../image/sdwww.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                <View style={{ backgroundColor: '#000', height: '4%', marginBottom: hp('3%') }}></View>
                <View style={styles.OuterInput}>
                    <View style={styles.viewIcon}>
                        <Entypo
                            name='location-pin'
                            type='font-awesome'
                            color='#9e9e9e'
                            size={26}
                            containerStyle={{}}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Choose your starting point'}
                    />
                </View>
                <View style={styles.OuterInput}>
                    <View style={styles.viewIcon}>
                        <MaterialCommunityIcons
                            name='arrow-down-box'
                            type='font-awesome'
                            color='#9e9e9e'
                            size={26}
                            containerStyle={{}}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder={'Choose your ending point'}
                    />
                </View>
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

                <TouchableOpacity style={styles.pickRide}
                onPress={() => this.props.navigation.navigate('#')} >
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

    pickRide: {
        position: "absolute",
        marginTop: '162%',
        backgroundColor: '#ffd014',
        zIndex: 1,
        height: 60,
        width: wp('100%'),
        alignItems: 'center',
    },
    loginButton: {
        borderRadius: 30,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '3%',
    },
    iconViewLeft: {
        position: "absolute",
        marginTop: '13%',
        marginHorizontal: wp('5%'),
        zIndex: 1,
    },
    OuterInput: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 30,
        marginBottom: 10,
        marginTop: 0,
        marginRight: 0,
        marginLeft: 50,
        width: WIDTH - 100,
    },
    viewIcon: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    input: {
        height: 40,
        padding: 10,
    },
});