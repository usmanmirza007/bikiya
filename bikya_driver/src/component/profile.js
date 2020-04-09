import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert, TextInput, Image, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

export default class profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Moblie: '',
            Email: '',
            Password: '',
            Id: ''
        };
    }
    componentDidMount() {
        this.getItemAsync();
    }
    getItemAsync = async () => {
        await AsyncStorage.getItem('userId')
        .then(id =>{
            //console.log("async id ", id)
            axios.get(`https://bikeya.malangis.com/public/api/getdriver/${id}`).then((response) =>{
                console.log(response.data.profile.id)

                    if(response.data.success === "1"){
                        this.setState({Name: response.data.profile.username})
                        this.setState({Email: response.data.profile.email})
                        this.setState({Moblie: response.data.profile.phonenumber})
                        this.setState({Id: response.data.profile.id})
                        console.log(this.state.Email)
                    }
            }).catch((error) =>{
                Alert.alert('Please Check Your Internet Connection')
            })
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./../image/dddeeeee.png')} style={{ flex: 1, width: '100%', height: '100%' }} resizeMode='stretch'>
                    <View style={{ backgroundColor: '#000', height: '4%', }}></View>
                    <View style={styles.bg}>
                        <View style={styles.mainView}>
                            <View style={styles.viewIcon}>
                                <AntDesign
                                    name='arrowleft'
                                    type='font-awesome'
                                    color='#9e9e9e'
                                    size={26}
                                    containerStyle={{}}
                                    onPress={() => this.props.navigation.navigate('account')}
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Profile</Text>
                            <View style={styles.viewIcon}>
                                <MaterialIcons
                                    name='edit'
                                    type='font-awesome'
                                    color='#9e9e9e'
                                    size={26}
                                    containerStyle={{}}
                                    onPress={() => this.props.navigation.navigate('profileUpdate', {DeriverID: this.state.Id})}
                                />
                            </View>
                        </View>
                    </View>
                    <ScrollView >
                        <View style={styles.inputView}>
                            <Text style={styles.nameText}>Name</Text>
                            <View style={styles.input}>
                                <Text>{this.state.Name}</Text>
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.nameText}>Mobile</Text>
                            <View style={styles.input}>
                                <Text>{this.state.Moblie}</Text>
                            </View>
                        </View>
                        <View style={styles.inputView1}>
                            <Text style={styles.nameText}>Email</Text>
                            <View style={styles.input}>
                                <Text>{this.state.Email}</Text>
                            </View>
                        </View>
                        <View style={styles.termsView}>
                            <View style={styles.terms}>
                                <Text style={styles.service}>Terms of Service</Text>
                                <View style={styles.viewIco}>
                                    <Ionicons
                                        name='ios-arrow-forward'
                                        type='font-awesome'
                                        color='#9e9e9e'
                                        size={20}
                                        containerStyle={{}}
                                        onPress={() => this.props.navigation.navigate('#')}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.termsView1}>
                            <View style={styles.terms}>
                                <Text style={styles.service}>Rate the App</Text>
                                <View style={styles.viewIco}>
                                    <Ionicons
                                        name='ios-arrow-forward'
                                        type='font-awesome'
                                        color='#9e9e9e'
                                        size={20}
                                        containerStyle={{}}
                                        onPress={() => this.props.navigation.navigate('#')}
                                    />
                                </View>
                            </View>
                        </View>
                        <Text style={styles.version}>v 4.89</Text>
                        <TouchableOpacity style={styles.loginButton}
                            onPress={() => this.props.navigation.navigate('signIn')} >
                            <Text style={styles.loginText}>Log Out</Text>
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
    },
    bg: {
        backgroundColor: '#f4f4f8',
        height: 60
    },
    mainView: {
        flexDirection: 'row',
        marginTop: hp('3%'),
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
    },
    input: {
        height: 60,
        width: wp('50%'),
        justifyContent: 'center',

    },
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginHorizontal: wp('5%'),

    },
    inputView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),

    },
    nameText: {
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    terms: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp('5%'),
        marginVertical: hp('3%')
    },
    termsView: {
        borderTopColor: '#ccc',
        borderTopWidth: 3,
        borderBottomColor: '#ccc',
        borderBottomWidth: 3,
    },
    termsView1: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 3,
    },
    service: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    version: {
        alignSelf: 'flex-end',
        fontSize: 12,
        marginRight: wp('3%'),
        marginTop: hp('1%')
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