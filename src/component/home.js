import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class home extends React.Component {
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
                    <Image source={require('./../image/download.jpg')} style={{ alignSelf: 'center', width: '100%', height: 150, marginBottom: hp('3%') }} />
                    <View style = {styles.mainView}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('map')}
                             style = {styles.cardView}>
                            <Image source = {require('./../image/newicon1.png')} style = {{width: 80, height: 80, marginTop: hp('3%')}} />
                            <Text style = {styles.cardText}>Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('map') }}
                         style = {styles.cardView}>
                            <Image source = {require('./../image/newicon2.png')} style = {{width: 90, height: 90, marginTop: hp('2%')}} />
                            <Text style = {styles.cardText}>Bike</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {styles.mainView}>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('wallet')} style = {styles.cardView}>
                            <Image source = {require('./../image/newicon3.png')} style = {{width: 80, height: 80, marginTop: hp('3%')}} />
                            <Text style = {styles.cardText}>Wallet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('profile')} style = {styles.cardView}>
                            <Image source = {require('./../image/newicon4.png')} style = {{width: 80, height: 80, marginTop: hp('3%')}} />
                            <Text style = {styles.cardText}>Users</Text>
                        </TouchableOpacity>
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
    mainView:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp('2%')
    },
    cardView:{
        backgroundColor: '#f4f4f8',
        borderRadius: 10,
        height: hp('30%'),
        width: wp('40%'),
        alignItems: 'center',
        marginHorizontal: wp('2%')
    },
    cardText:{
        fontSize: 15,
        color: '#000',
        marginTop: hp('3%')
    }
});