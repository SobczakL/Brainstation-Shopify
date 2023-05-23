import React, { useState, useEffect, useRef } from 'react';
import './chatbot.scss';

import { getFeedback } from '../../axios';
import Message from './Message';

const ChatBox = props => {
    const bottomRef = useRef(null);
    const [messages, setmessages] = useState([
        {
            message:
                'Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?',
            sender: 'Bot',
        },
        {
            message:
                'Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?',
            sender: 'Bot',
        },
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
    ]);
    const [userMsg, setUserMsg] = useState('');

    const addMessage = text => {
        setmessages([...messages, { message: text, sender: 'User' }]);
        setUserMsg(text);
    };

    useEffect(() => {
        if (userMsg !== '') {
            getFeedback(userMsg).then(response => {
                setmessages([
                    ...messages,
                    { message: response.data, sender: 'Bot' },
                ]);
            });
            setUserMsg('');
        }
    }, [messages, userMsg]);

    useEffect(() => {
        bottomRef.current.scrollIntoView();
    }, []);

    return (
        <div className="chatbot-frame">
            <div className="chatbot-box">
                <div className="chatbot-box__header">
                    <span className="title">Shopify Bot</span>
                </div>
                <div className="chatbot-box__body">
                    <div className="message-container">
                        <div className="message-container__list">
                            {messages &&
                                messages.map((msg, i) => {
                                    return (
                                        <Message
                                            key={i}
                                            sender={msg.sender}
                                            msg={msg.message}
                                        />
                                    );
                                })}
                        </div>
                        <div ref={bottomRef}></div>
                    </div>
                    <div className="input">
                        <input placeholder="Chat" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
