import React, { useState, useEffect } from 'react';
import { TextField } from '@shopify/polaris';
// import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
// import {
//     MainContainer,
//     ChatContainer,
//     MessageList,
//     Message,
//     MessageInput,
// } from '@chatscope/chat-ui-kit-react';
import './chatbox.scss';

import { getFeedback } from '../axios';

const ChatBox = () => {
    const [message, setmessage] = useState([
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
    ]);
    const [userMsg, setUserMsg] = useState('');

    const addMessage = text => {
        setmessage([...message, { message: text, sender: 'User' }]);
        setUserMsg(text);
    };

    useEffect(() => {
        if (userMsg !== '') {
            getFeedback(userMsg).then(response => {
                setmessage([
                    ...message,
                    { message: response.data, sender: 'Bot' },
                ]);
            });
            setUserMsg('');
        }
    }, [message, userMsg]);

    return (
        <div className="chatbot-frame">
            <div className="chatbot-box">
                <div className="chatbot-box__header">
                    <span className="title">Shopify Bot</span>
                </div>
                <div className="chatbot-box__body">
                    <div className="message-list"></div>
                    <div className="input">
                        <input placeholder="Chat" />
                    </div>
                </div>
            </div>

            {/* <MainContainer style={{ borderRadius: '20px' }}>
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
            </MainContainer> */}
        </div>
    );
};

export default ChatBox;
