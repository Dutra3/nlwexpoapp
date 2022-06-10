import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from '../Message'
import { styles } from './styles';

export function MessageList() {
    const message = {
        id: '1',
        text: 'mensagem de teste',
        user: {
            name: 'Gabriel',
            avatar_url: 'https://avatars.githubusercontent.com/u/56978439?v=4',
        }    
    }

    return (
        <ScrollView 
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps='never'
        >
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
            <Message data={message}/>
        </ScrollView>
    )
}