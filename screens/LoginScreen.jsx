import { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { Input, Header } from '../src/components/Form';
import FormStyle from '../src/css/FormStyle';

import { login, saveCredentials, checkLoggedIn } from '../src/libraries/Auth';

export default function LoginScreen({navigation}) {


    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setLoading] = useState();


    checkLoggedIn(res => {
      if (res) {
          navigation.navigate('HomeScreen');
      }
    });

    const submit = () => {
      setLoading(true);
      login({
        username: username,
        password: password
      }).then(res => {
          setLoading(false);
          setUsername('');
          setPassword('');
          alert(res.data.message);
          saveCredentials(res.data.token, res.data.authtoken, res.data.user_id, res.data.username, res => {
            navigation.navigate('HomeScreen');
          })
      }).catch(err => {
          setLoading(false);
          alert(err.response.data.message);
      });
    }

    return (
        <View style={styles.container}>
        <Header title="Connexion" />
        <View style={FormStyle.container}>
          <Input style={FormStyle.input} placeholder="Nom d'utilisateur" correct={false} onChangeText={uname => {setUsername(uname)}} value={username} />
          <Input style={FormStyle.input} placeholder="Mot de passe" secureTextEntry correct={false} onChangeText={upass => setPassword(upass)} value={password} />
          <TouchableOpacity disabled={isLoading} onPress={() => submit() } style={FormStyle.button}>
              <LinearGradient colors={['#A647FF', '#5B75FF']} start={{x: 0, y: 1}} end={{x: .5, y: 2}} style={FormStyle.button}>
                  { isLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={FormStyle.button.text}>Connexion</Text>}
              </LinearGradient>
          </TouchableOpacity>
          <Text>Pas encode de compte ? <Text style={FormStyle.link} onPress={() => { navigation.navigate('RegisterScreen')} }>Inscription</Text></Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});