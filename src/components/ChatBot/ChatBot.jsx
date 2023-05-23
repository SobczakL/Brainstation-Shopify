import React, { useState, useEffect, useRef } from 'react';
import './chatbot.scss';

import { getFeedback } from '../../axios';
import Message from './Message';

const ChatBox = props => {
    const msgListRef = useRef(undefined);
    const [url, setUrl] = useState(undefined);
    const [userMsg, setUserMsg] = useState('');
    const [messages, setmessages] = useState([
        {
            message:
                'Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?',
            sender: 'Bot',
        },
        {
            message:
                'Hello, what can I do for you?Hello, what can I do for you?Hello, what can I do for you?',
            sender: 'User',
        },
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
        {
            message: 'Hello, what can I do for you?',
            sender: 'User',
        },
        {
            message: 'Hello, what can I do for you?',
            sender: 'Bot',
        },
    ]);

    const addMessage = text => {
        setmessages([...messages, { message: text, sender: 'User' }]);
    };

    const handleKeyDown = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            addMessage(e.target.value);
            setUserMsg('');
        }
    };

    const handleMsgChange = e => {
        setUserMsg(e.target.value);
    };

    useEffect(() => {
        // if (userMsg !== '') {
        //     getFeedback(userMsg).then(response => {
        //         setmessages([
        //             ...messages,
        //             { message: response.data, sender: 'Bot' },
        //         ]);
        //     });
        //     setUserMsg('');
        // }
    }, [messages, userMsg]);

    useEffect(() => {
        const url = window.location.pathname;
        setUrl(url);
    }, [window.location.pathname]);

    useEffect(() => {
        msgListRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [userMsg]);

    return (
        <div className="chatbot-frame">
            <div className="chatbot-box">
                <div className="chatbot-box__header">
                    <span className="title">Shopify Bot</span>
                </div>
                <div className="chatbot-box__body">
                    <div className="message-container">
                        <div
                            className="message-container__list"
                            ref={msgListRef}
                        >
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
                    </div>
                    <div className="input">
                        <input
                            placeholder="Chat"
                            value={userMsg}
                            onChange={e => handleMsgChange(e)}
                            onKeyDown={e => handleKeyDown(e)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
