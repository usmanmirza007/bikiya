import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Alert, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class signUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            username: '',
            phonenumber: '',
            errorText: '',
            loading: false
        };
    }

    onSignUp(email, password, username, phonenumber) {
        this.setState({ errorText: '', loading: true })
        if (this.state.email === '' || this.state.password === '' || this.state.username === '' || this.state.phonenumber === '') {
            this.setState({loading: false})
            return Alert.alert('Please enter all feilds')
        }
        else if (this.state.password.length <= 6) {
            return Alert.alert('Please enter atlest 6 character password')
        }
        else {
            axios.post(`https://bikeya.malangis.com/public/api/driver_register`,
                {
                    'email': email,
                    'password': password,
                    'username': username,
                    'phonenumber': phonenumber
                }
            ).then((response) => {
                if (response.data.message === "Account Successfully Created") {
                    this.setState({ loading: false })
                    this.signUpSuccess()
                }
                else {
                    this.setState({loading: false})
                    Alert.alert('User already exist')
                    this.signUpFail()
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
                onPress={() => this.onSignUp(this.state.email, this.state.password, this.state.username, this.state.phonenumber)} >
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        )
    }
    signUpSuccess() {
        this.setState({
            email: '',
            password: '',
            username: '',
            phonenumber: '',
            loading: false,
            errorText: ''
        })
        this.props.navigation.navigate('signIn')
    }
    signUpFail() {
        this.setState({
            errorText: 'Authentication Failed.',
            loading: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/sdwwweeee.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <KeyboardAvoidingView behavior="padding">
                        <ScrollView>
                            <Image source={require('./../image/eeeeaa.png')} style={{ marginTop: hp('5%'), marginBottom: hp('3%'), alignSelf: 'center', width: 150, height: 150 }} />

                            <View style={styles.input}>
                                <TextInput
                                    placeholder={'Your Name'}
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username}
                                    placeholderTextColor={'#000'} />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder={'Your Email'}
                                    style={{ marginLeft: 15, fontSize: 15 }}

                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholderTextColor={'#000'} />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder={'Your Phone No'}
                                    keyboardType={'numeric'}
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    onChangeText={(phonenumber) => this.setState({ phonenumber })}
                                    value={this.state.phonenumber}
                                    placeholderTextColor={'#000'} />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder={'Your Password'}
                                    secureTextEntry={true}
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    placeholderTextColor={'#000'} />
                            </View>

                            <Text style={{ color: 'red', alignSelf: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
                            {this.renderButton()}
                            <View style={{ alignItems: 'center', marginBottom: hp('5%'), marginTop: hp('5%') }}>
                                <Text style={{ fontSize: 15 }}>Already have an account?
                            <Text style={{ color: '#02aa31', fontSize: 15, }}
                                        onPress={() => { this.props.navigation.navigate('signIn') }}> Login
                            </Text>
                                </Text>
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