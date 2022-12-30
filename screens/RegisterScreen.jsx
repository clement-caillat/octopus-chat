import { useState } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { Header, Input } from '../src/components/Form';

import FormStyle from '../src/css/FormStyle';

import { register } from '../src/libraries/Auth';



export default function RegisterScreen({navigation}) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [cpassword, setCpassword] = useState();
    const [isLoading, setLoading] = useState();

    const submit = () => {
      setLoading(true)
      register({
        username: username,
        password: password,
        cpassword: cpassword,
      }).then(res => {
        setLoading(false);
        alert(res.data.message);
        navigation.navigate('LoginScreen');
      }).catch(err =>
      {
        setPassword('');
        setCpassword('');
        setLoading(false);
        alert(err.response.data.message);
      })
    }

    return (
      <View style={styles.container}>
        <Header title="Inscription" />
        <View style={FormStyle.container}>
          <Input style={FormStyle.input} placeholder="Nom d'utilisateur" correct={false} onChangeText={uname => {setUsername(uname)}} value={username} />
          <Input style={FormStyle.input} placeholder="Mot de passe" secureTextEntry correct={false} onChangeText={upass => setPassword(upass)} value={password} />
          <Input style={FormStyle.input} placeholder="Confirmer" secureTextEntry correct={false} onChangeText={ucpass => setCpassword(ucpass)} value={cpassword} />
          <TouchableOpacity disabled={isLoading} onPress={() => submit() } style={FormStyle.button}>
              <LinearGradient colors={['#A647FF', '#5B75FF']} start={{x: 0, y: 1}} end={{x: .5, y: 2}} style={FormStyle.button}>
                  { isLoading ? <ActivityIndicator size="small" color="white" /> : <Text style={FormStyle.button.text}>Inscription</Text>}
              </LinearGradient>
          </TouchableOpacity>
          <Text>Déjà un compte ? <Text style={FormStyle.link} onPress={() => { navigation.navigate('LoginScreen')} }>Connexion</Text></Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});