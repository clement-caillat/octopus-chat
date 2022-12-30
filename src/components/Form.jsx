import { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FormStyle from '../css/FormStyle';


export function Header(props)
{
    return (
        <View style={FormStyle.header}>
            <Image
              source={require('../../assets/icon.png')}
              style={FormStyle.header.logo}
            />
            <Text style={FormStyle.header.title}>{props.title}</Text>
        </View>
    )
}


export function Input(props)
{
    return (
        <TextInput
            style={props.style}
            onChangeText={props.onChangeText}
            autoCapitalize='none'
            autoCorrect={props.correct}
            // style={FormStyle.input}
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}>{props.value}</TextInput>
        
    )
}

export function Form(props)
{
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    if (props.auth)
    {
        return (
            <View style={FormStyle.container}>
                <Input style={FormStyle.input} placeholder="Nom d'utilisateur" correct={false} onChangeText={() => setUsername(username)} value={username} />
                <Input style={FormStyle.input} placeholder="Mot de passe" secureTextEntry correct={false} onChangeText={() => setPassword(password)} value={password} />
                <TouchableOpacity style={FormStyle.button}>
                    <LinearGradient colors={['#A647FF', '#5B75FF']} start={{x: 0, y: 1}} end={{x: .5, y: 2}} style={FormStyle.button}>
                        <Text style={FormStyle.button.text}>Connexion</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <Text>Pas encore de compte ? <Text style={FormStyle.link} onPress={() => { props.navigation.navigate('RegisterScreen')} }>Inscription</Text></Text>
            </View>
        )
     }
}


Input.defaultProps = {
    correct: true
}