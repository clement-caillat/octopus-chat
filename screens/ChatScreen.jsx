import { useState, useRef, useEffect } from 'react';
const { io } = require("socket.io-client");

import { Text, View, ScrollView, TextInput, TouchableOpacity} from "react-native"
import ChatStyle from '../src/css/ChatStyle';

import { getUserInfos } from '../src/libraries/Auth';
import Message from '../src/components/Message';
import Api from '../src/libraries/Api';

const api = new Api;

function postMessage(message, callback) {
    api.post({
        route: '/messages',
        data: {
            content: message
        },
        success: res => {
            callback(res);
        }
    });
}

function getMessages(callback) {
    
    api.get({
        route: '/messages',
        success: data => {
            callback(data.data.messages);
        }
    })
}


export default function ChatScreen({navigation}) {
    
    let scrollContainer = useRef();
    
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState();
    const [username, setUsername] = useState();
    
    useEffect(() => {
        getUserInfos(data => {
            setUsername(data.username);
        })

        getMessages(data => {
            if (!data)
            {
                alert('Aucun message pour le moment');
            } else {
                setChatMessages(data);
            }
        });

        const socket = io('http://192.168.1.58:5000');
        socket.on('new_message', mes => {
            setChatMessages(chatMessages => [...chatMessages, mes]);
        })
        

    }, []);


    const submitMessage = () => {
        if (message != '' && message != undefined)
        {
            postMessage(message, res => {
                
            });

            setMessage('');
        }
    }


    const roomMessages = chatMessages.map(chatMessage => {
            
        if (chatMessage.username == username)
        {
            return(<Message key={chatMessage.id} intern pseudo={chatMessage.username} content={chatMessage.content}/>);
        }else
        {
            return(<Message key={chatMessage.id} pseudo={chatMessage.username} content={chatMessage.content}/>);
        }
    });


    return (
        <View style={{flex: 1, paddingTop: 40 }}>
            <View style={ChatStyle.messagesContainer}>
                <ScrollView ref={scrollContainer} onContentSizeChange={() => scrollContainer.current.scrollToEnd()} contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end'}}>
                    {roomMessages}
                </ScrollView>
            </View>
            <View style={ChatStyle.userContainer}>
                <TextInput style={ChatStyle.userContainer.TextInput} placeholder="Taper votre message" onChangeText={value => {setMessage(value)}} value={message} />
                <TouchableOpacity style={ChatStyle.userContainer.submitButton} onPress={() => { submitMessage() }}><Text style={{color: 'white'}}>Send</Text></TouchableOpacity>
            </View>
        </View>
    )
}