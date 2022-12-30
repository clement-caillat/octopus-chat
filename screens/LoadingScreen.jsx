import { StyleSheet, Button, Text, View } from 'react-native';

export default function LoadingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Octopus Login</Text>
            <Button 
                title="Register"
                onPress={() => navigation.navigate('Register')}    
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'white'
    }
  });