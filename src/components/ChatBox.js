import React, { useState, useEffect } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
} from '@chatscope/chat-ui-kit-react';
import './chatbox.scss';

import { getFeedback } from '../axios';

const ChatBox = () => {
    const [message, setmessage] = useState([
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
    ]);

    const addMessage = text => {
        setmessage([...message, { message: text, sender: 'User' }]);
        getFeedback(text).then(response => {
            setmessage([
                ...message,
                { message: text, sender: 'User' },
                { message: response.data, sender: 'Bot' },
            ]);
        });
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '50px',
                right: '50px',
                height: '500px',
                width: '300px',
                borderRadius: '5px',
            }}
        >
            <MainContainer style={{ borderRadius: '20px' }}>
                <ChatContainer>
                    <MessageList style={{ paddingTop: '10px' }}>
                        {message &&
                            message.map((message, index) => {
                                return message.sender === 'Bot' ? (
                                    <Message
                                        key={index}
                                        model={{
                                            message: message.message,
                                            sender: message.sender,
                                        }}
                                    />
                                ) : (
                                    <Message
                                        key={index}
                                        style={{
                                            justifyContent: 'flex-end',
                                            display: 'flex',
                                            transform: 'translateX(40px)',
                                        }}
                                        model={{
                                            message: message.message,
                                            sender: message.sender,
                                        }}
                                    />
                                );
                            })}
                    </MessageList>
                    <MessageInput
                        placeholder="Type message here"
                        onSend={text => addMessage(text)}
                    />
                </ChatContainer>
            </MainContainer>
        </div>
    );
};

export default ChatBox;
