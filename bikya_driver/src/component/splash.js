import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { width, height, totalSize } from 'react-native-dimension';

export default class splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

        setTimeout(() => { this.props.navigation.navigate('signIn') }, 2000);

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ImageBackground source={require('./../image/asaddasdaas.jpg')} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                </ImageBackground>
            </View>
        );
    }
}

