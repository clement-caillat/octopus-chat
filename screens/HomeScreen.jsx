import { useState } from 'react';
import { View, StyleSheet, Text, Image, Button} from 'react-native';
// import { NavigationActions } from '@react-navigation/native';


import { checkLoggedIn, getUserInfos, logOut } from '../src/libraries/Auth';

export default function HomeScreen({navigation}) {
    const [user_id, setUserId] = useState();
    const [username, setUsername] = useState();


    checkLoggedIn(res => {
        if (!res) {
            navigation.navigate('LoginScreen');
        }
    });

    getUserInfos(data => {
        setUserId(data.user_id);
        setUsername(data.username);
    })

    const disconnect = () => {
        logOut(res => {
            navigation.navigate('LoginScreen');
        })
    }


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Welcome {username} </Text>
            <Button onPress={() => disconnect()} title="Déconnexion"/>
            <Button onPress={() => navigation.navigate('ChatScreen')} title="Chat"/>
        </View>
    )
}