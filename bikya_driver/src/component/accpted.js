import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class accpted extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Name: this.props.navigation.state.params.getName1,
            // From_location: this.props.navigation.state.params.getFromLocation1,
            // To_location: this.props.navigation.state.params.getToLocation1,
            // Time1: this.props.navigation.state.params.getTime1,
            Name: '',
            Form_location: '',
            To_location: '',
            Time1: ''
            
        };
    }

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <FontAwesome
                name='th'
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
                                <Text style={{ marginHorizontal: wp('3%') }}>Refresh</Text>
                                <FontAwesome
                                    name='refresh'
                                    type='font-awesome'
                                    color='#000'
                                    size={20}
                                    style={{ marginRight: wp('3%') }}
                                />
                            </View>
                        </View>
                        <View style={styles.bg2}>
                            <Text style={styles.text}>ACCPTED ORDERS</Text>
                        </View>
                        <View style={styles.mainView}>
                            <Text style={styles.gryeroText}>{this.state.Name}</Text>
                            <View style={styles.agoTextView}>
                                <Text style={styles.agoText}>{this.state.Time1} </Text>
                            </View>

                        </View>
                        <View style={styles.mainViewbuttom}>
                            <Text style={styles.newShop}>{this.state.From_location}</Text>
                            <View style={styles.iconView}>
                                <Entypo
                                    name='location-pin'
                                    type='font-awesome'
                                    color='#000'
                                    size={20}
                                    style={{ marginRight: wp('0%') }}
                                />
                                <Text style={{ marginHorizontal: wp('3%') }}>{this.state.To_location} </Text>

                            </View>
                        </View>
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
    mainView: {
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginTop: hp('5%'),
        height: 50,
        backgroundColor: '#000'
    },
    gryeroText: {
        marginLeft: wp('5%'),
        marginTop: hp('2%'),
        color: '#fff'
    },
    agoTextView: {
        flexDirection: 'row',
        marginRight: wp('5%'),
        borderColor: '#fff',
        marginTop: hp('1.5%'),
        borderWidth: 1,
        padding: 2,
        height: 30
    },
    agoText: {
        marginHorizontal: wp('3%'),
        color: '#fff'
    },
    mainViewbuttom: {
        backgroundColor: '#fff',
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
    },
    newShop: {
        marginTop: hp('3%'),
        marginLeft: wp('5%'),
        fontWeight: 'bold'
    },
    iconView: {
        flexDirection: 'row',
        marginRight: wp('5%'),
        marginTop: hp('3%'),
    }
});