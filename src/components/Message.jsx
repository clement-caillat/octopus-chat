import { View, Text } from 'react-native';

import ChatStyle from "../css/ChatStyle"


export default function Message(props)
{
    return (
        <View style={[ChatStyle.messageBubble, props.intern ? ChatStyle.messageBubble.intern : ChatStyle.messageBubble.extern]}>
            <Text style={props.intern ? ChatStyle.messageBubble.pseudo.intern : ChatStyle.messageBubble.pseudo.extern}>{props.pseudo}</Text>
            <View style={[ChatStyle.messageBubble.wrapper, props.intern ? ChatStyle.messageBubble.wrapper.intern : ChatStyle.messageBubble.wrapper.extern]}>
                <Text style={[ChatStyle.messageBubble.text, props.intern ? ChatStyle.messageBubble.text.intern : ChatStyle.messageBubble.text.extern]}>{props.content}</Text>
            </View>
        </View>
    )
}