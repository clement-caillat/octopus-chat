import { StyleSheet } from 'react-native';

const FormStyle = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#E3E3E3',
        padding: 15,
        width: '75%',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 20
    },
    button: {
        padding: 20,
        borderRadius: 5,
        width: 250,
        alignItems: 'center',
        text: {
            color: '#fff',
            fontSize: 18,
        },
        marginBottom: 5, 
    },
    link: {
        color: 'blue',
        fontSize: 17
    },
    header: {
        flex: 1.7,
        justifyContent: 'center',
        alignItems: 'center',
        logo: {
          width: 150,
          height: 150,
        },
        title: {
          marginTop: 20,
          fontSize: 28
        }
      },
});


export default FormStyle;