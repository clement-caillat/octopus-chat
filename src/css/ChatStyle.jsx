import { StyleSheet } from 'react-native';

const ChatStyle = StyleSheet.create({
    messagesContainer: {
        flex: 5.5,
        paddingLeft: 10,
        paddingRight: 10,
        // alignContent: 'flex-end'
    },
    userContainer: {
        flex: 0.5,
        backgroundColor: '#E5E5E5',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'row',
        TextInput: {
            width: '75%',
            padding: 10,
            fontSize: 15,
            borderRadius: 100,
            backgroundColor: 'lightgray',
            color: 'black',
        },
        submitButton: {
            backgroundColor: '#007aff',
            padding: 2,
            width: '15%',
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            height: '60%'
        }
    },
    messageBubble: {
        marginBottom: 10,
        intern: {
            alignSelf: 'flex-end'
        },
        extern: {
            alignSelf: 'flex-start',
        },
        wrapper: {
            marginBottom: 10,
            maxWidth: '46%',
            borderRadius: 10,
            padding: 10,
            intern: {
                backgroundColor: 'purple',
            },
            extern: {
                backgroundColor: 'lightgray'
            }
        },
        pseudo: {
            intern: {
                textAlign: 'right'
            },
            extern: {
                textAlign: 'left'
            }
        },
        text: {
            fontSize: 15,
            intern: {
                color: 'white'
            }
        }
    }

});


export default ChatStyle;