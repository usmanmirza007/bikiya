import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class signUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/sdwww.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <ScrollView>
                        <Image source={require('./../image/logo1.png')} style={{ alignSelf: 'center', width: 150, height: 150 }} />

                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Your Name'}
                                style={{ marginLeft: 15, fontSize: 15 }}
                                placeholderTextColor={'#000'} />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Your Email'}
                                style={{ marginLeft: 15, fontSize: 15 }}
                                placeholderTextColor={'#000'} />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Your Phone No'}
                                keyboardType={'numeric'}
                                style={{ marginLeft: 15, fontSize: 15 }}
                                placeholderTextColor={'#000'} />
                        </View>
                        <View style={styles.input}>
                            <TextInput
                                placeholder={'Your Password'}
                                secureTextEntry={true}
                                style={{ marginLeft: 15, fontSize: 15 }}
                                placeholderTextColor={'#000'} />
                        </View>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={() => this.props.navigation.navigate('signIn')} >
                            <Text style={styles.loginText}>Sign Up</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', marginBottom: 0, marginTop: hp('5%') }}>
                            <Text style={{ fontSize: 15 }}>Already have an account?
                            <Text style={{ color: '#02aa31', fontSize: 15 }}
                                    onPress={() => { this.props.navigation.navigate('signIn') }}> Login
                            </Text>
                            </Text>
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
    input: {
        backgroundColor: '#f4f4f8',
        marginTop: hp('3%'),
        height: 50,
        justifyContent: 'center',
        marginHorizontal: wp('8%'),
        borderRadius: 30
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    loginButton: {
        padding: 15,
        alignSelf: 'center',
        borderRadius: 30,
        width: WIDTH - 150,
        backgroundColor: '#000',
        marginTop: hp('5%')
    },
    loginText: {
        backgroundColor: 'transparent',
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff',
    },
});