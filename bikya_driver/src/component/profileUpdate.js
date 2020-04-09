import React from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, Image, Alert, Picker, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons, MaterialIcons, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import SpinnerScreen from './SpinnerScreen';

export default class profileUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Email: '',
            Mobile: '',

            email: '',
            password: '',
            username: '',
            phonenumber: '',
            errorText: '',
            loading: false,
            Id: this.props.navigation.state.params.DeriverID,

        };
    }
    // ################ get data ####################
    componentDidMount() {
        this.getItemAsync();
    }
    getItemAsync = async () => {
        await AsyncStorage.getItem('userId')
        .then(id =>{
            console.log("async id ", id)
            axios.get(`https://bikeya.malangis.com/public/api/getdriver/${id}`).then((response) =>{
                console.log(response.data.profile.id)

                    if(response.data.success === "1"){
                        this.setState({Name: response.data.profile.username})
                        this.setState({Email: response.data.profile.email})
                        this.setState({Mobile: response.data.profile.phonenumber})
                        console.log(this.state.Mobile)
                    }
            }).catch((error) =>{
                Alert.alert('Please Check Your Internet Connection')
            })
        })
    }

    // ##################### update data #######################

    onSignUp(email, password, username, phonenumber, id) {
        console.log("Update id", this.state.Id)
        this.setState({ errorText: '', loading: true })
        if (this.state.password.length <= 6) {
            return Alert.alert('Please enter atlest 6 character password')
        }
        else {
                axios.post(`https://bikeya.malangis.com/public/api/driverprofile`,
                {
                    'email': email,
                    'id': id,
                    'password': password,
                    'username': username,
                    'phonenumber': phonenumber
                }
            ).then((response) => {
                if (response.data.message === "Your profile has been saved") {
                    Alert.alert('Profile has been updated')
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
                onPress={() => this.onSignUp(this.state.email, this.state.Id , this.state.password, this.state.username, this.state.phonenumber)} >
                <Text style={styles.loginText}>Profile Update</Text>
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
                                    onPress={() => this.props.navigation.navigate('profile')}
                                />
                            </View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Profile Update</Text>
                            <View style={styles.viewIcon}>
                                <MaterialIcons
                                    name='edit'
                                    type='font-awesome'
                                    color='#9e9e9e'
                                    size={26}
                                    containerStyle={{}}
                                    onPress={() => this.props.navigation.navigate('#')}
                                />
                            </View>
                        </View>
                    </View>
                    <ScrollView >
                        <View style={styles.inputView}>
                            <Text style={styles.nameText}>Name</Text>
                            <View style={styles.input}>
                                <TextInput
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.Name}
                                    placeholderTextColor={'#000'} />
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.nameText}>Mobile</Text>
                            <View style={styles.input}>
                                <TextInput
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    keyboardType = {'numeric'}
                                    placeholder={this.state.Mobile}
                                    onChangeText={(phonenumber) => this.setState({ phonenumber })}
                                    value={this.state.phonenumber}
                                    
                                    placeholderTextColor={'#000'} />
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.nameText}>Email</Text>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder={this.state.Email}
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    placeholderTextColor={'#000'} />
                            </View>
                        </View>
                        <View style={styles.inputView}>
                            <Text style={styles.nameText}>Password</Text>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder={'Change Password'}
                                    style={{ marginLeft: 15, fontSize: 15 }}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                    placeholderTextColor={'#000'} />
                            </View>
                        </View>
                        <Text style={{ color: 'red', alignSelf: 'center', fontSize: 15 }}>{this.state.errorText}</Text>
                            {this.renderButton()}
                        
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
    service:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    version:{
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