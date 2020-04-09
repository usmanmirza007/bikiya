import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, TextInput, Image, Alert, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class signIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errorText: '',
            loading: false
        };
    }

    onsignIn(email, password) {
        this.setState({ errorText: '', loading: true })
        if (this.state.email === '' || this.state.password === '') {
            this.setState({loading: false})
        
            return Alert.alert('Please enter feilds')
            
        }
        else {
            axios.post(`https://bikeya.malangis.com/public/api/driver_login`,
                {
                    'email': email,
                    'password': password
                    
                }
            ).then((response) => {
                console.log(response.data.data.id)
                if (response.data.message === "Logedin successfully") {
                    AsyncStorage.setItem("userId",JSON.stringify(response.data.data.id));
                    this.signInSuccess()
                    console.log(this.state.response)
                }
                else {
                    
                    this.setState({loading: false})
                    this.signFail()
                    Alert.alert('User already exist')
                }
            })
        }
    }
    renderButton() {
        if (this.state.loading) {
            return <SpinnerScreen />
        }
        return (
            <TouchableOpacity style={styles.loginButton}
            onPress={() => this.onsignIn(this.state.email, this.state.password)} >
            <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>

        )
    }
    signFail() {
        this.setState({ errorText: 'Authentication Failed.', loading: false })
    }
    signInSuccess() {
        this.setState({
            loading: false,
            email: '',
            password: '',
            errorText: '',
        })
        this.props.navigation.navigate('tab')
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/sdwwweeee.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <KeyboardAvoidingView behavior="padding">
                        <ScrollView >
                            <Image source={require('./../image/eeeeaa.png')} style={{ marginTop: hp('5%'), marginBottom: hp('3%'), alignSelf: 'center', width: 150, height: 150 }} />
                            <View style={{ marginTop: '0%' }}>
                                <View style={styles.input}>
                                    <TextInput
                                        placeholder={'Email'}
                                        style={{ marginLeft: 15, fontSize: 15 }}
                                        onChangeText={(email) => this.setState({ email })}
                                        value={this.state.email}
                                        placeholderTextColor={'#000'} />
                                </View>
                                <View style={styles.input}>
                                    <TextInput
                                        placeholder={'Password'}
                                        secureTextEntry={true}
                                        style={{ marginLeft: 15, fontSize: 15 }}
                                        onChangeText={(password) => this.setState({ password })}
                                        value={this.state.password}
                                        placeholderTextColor={'#000'} />
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 20, }}>
                                    <Text style={{ marginLeft: 35, color: '#000' }}>______________</Text>
                                    <Text style={{ marginTop: 5, marginLeft: 15, marginRight: 15, color: '#000' }}>Or Login with</Text>
                                    <Text style={{ marginRight: 25, color: '#000' }}>______________</Text>
                                </View>
                                <View style={styles.mainViewIcon}>
                                    <TouchableOpacity style={styles.facebook}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <FontAwesome
                                                // reverse
                                                name='facebook'
                                                type='font-awesome'
                                                color='#fff'
                                                size={43}
                                                style={{ marginHorizontal: 0, marginLeft: 18, marginTop: 10 }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.google}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Entypo
                                                // reverse
                                                name='google-'
                                                type='font-awesome'
                                                color='#fff'
                                                size={45}
                                                style={{ marginHorizontal: 0, marginTop: 0 }}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ color: 'red', alignSelf: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
                                {this.renderButton()}
                                <View style={styles.outerViewSignText}>
                                    <Text style={{ fontSize: 15 }}>Already have an account?
                                    <Text style={styles.signUpText}
                                            onPress={() => { this.props.navigation.navigate('signUp') }}> Sign Up
                                    </Text>
                                    </Text>
                                </View>
                                <Text style={{ color: '#000', marginBottom: 20, alignSelf: 'center', fontSize: 15 }} onPress={() => { this.props.navigation.navigate('forget') }}>Forget Password</Text>
                            </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
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
    loginButton: {
        padding: 15,
        alignSelf: 'center',
        borderRadius: 30,
        width: WIDTH - 150,
        backgroundColor: '#000'
    },
    loginText: {
        backgroundColor: 'transparent',
        fontSize: 15,
        alignSelf: 'center',
        color: '#fff',
    },
    mainViewIcon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 20
    },
    facebook: {
        backgroundColor: '#336699',
        width: 50,
        borderRadius: 50,
        height: 50
    },
    google: {
        backgroundColor: '#ff6666',
        width: 50,
        borderRadius: 50,
        marginLeft: 10,
        height: 50
    },
    twitter: {
        backgroundColor: '#3399ff',
        width: 50,
        borderRadius: 50,
        marginLeft: 10,
        height: 50
    },

    outerViewSignText: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: hp('10%')
    },
    signUpText: {
        color: '#02aa31',
        fontSize: 15
    }
});