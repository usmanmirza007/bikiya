import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { LinearGradient } from 'expo-linear-gradient';
import { LinearTextGradient } from "react-native-text-gradient";
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
export default class forget extends React.Component {
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
                    <View style={{ alignItems: 'center', }}>
                        <Text style={styles.header}>Forget Password</Text>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Please enter your email address. You will receive a</Text>
                        <Text style={styles.text}>link to create a new Password via email</Text>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder={'Your email address'}
                            style={{ marginLeft: 15, fontSize: 15 }}
                            placeholderTextColor={'#000'} />
                    </View>

                    <TouchableOpacity style={{ marginTop: 30, alignItems: 'center' }}
                        onPress={() => this.props.navigation.navigate('signIn')}>
                        <LinearGradient
                            colors={['#000000', '#000000']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.forget}>
                            <Text style={{
                                backgroundColor: 'transparent',
                                fontSize: 15,
                                color: '#fff',
                                fontWeight: 'bold'
                            }}>
                                Reset Password
                                    </Text>
                        </LinearGradient>
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
    input: {
        backgroundColor: '#cccccc',
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        width: WIDTH - 50,
        marginLeft: 25,
        borderRadius: 30
    },
    text: {
        fontSize: 15,
        color: '#9e9e9e',
    },
    textView: {
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 30
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 15,
        marginTop: 60
    },
    forget: {
        padding: 15,
        alignItems: 'center',
        borderRadius: 30,
        width: WIDTH - 100,
    }
});