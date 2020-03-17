import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
export default class verification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <View style={styles.container}>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                        <ImageBackground source={require('./../image/PhoneVerification.png')} style={{ width: '100%', height: '100%' }} >
                        <ScrollView> 
                        <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: 15, padding: 15, marginTop: '80%' }}>Enter 4 digit code you received via SMS</Text>
                            </View>
                            <View style={styles.outerInputView}>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType={'numeric'}

                                        maxLength={1}
                                        placeholderTextColor={'#000'} />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        maxLength={1}
                                        placeholderTextColor={'#000'} />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        maxLength={1}
                                        placeholderTextColor={'#000'} />
                                </View>
                                <View style={styles.inputView}>
                                    <TextInput
                                        style={styles.input}
                                        keyboardType={'numeric'}
                                        maxLength={1}
                                        placeholderTextColor={'#000'} />
                                </View>
                            </View>
                            <View style={styles.ButtomText}>
                                <Text style={{ color: '#9e9e9e' }}>Did not received any code?</Text>
                            </View>

                            <View style={{ alignItems: 'center', marginBottom: 40 }}>
                                <Text style={styles.resendCode} onPress={() => { this.props.navigation.navigate('signIn') }}>Resend SMS</Text>
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
    outerInputView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    inputView: {
        backgroundColor: '#cccccc',
        marginTop: 20,
        height: 60,
        justifyContent: 'center',
        width: WIDTH - 300,
        marginLeft: 0,
        borderRadius: 30
    },
    input: {
        marginLeft: 13,
        fontSize: 20,
        padding: 10
    },
    ButtomText: {
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 20
    },
    resendCode: {
        color: '#ff9900',
        textDecorationLine: 'underline',
        fontSize: 15,
        fontWeight: 'bold'
    }
});