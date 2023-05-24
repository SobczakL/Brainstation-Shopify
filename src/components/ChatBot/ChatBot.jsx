import React, { useState, useEffect, useRef } from 'react';
import './chatbot.scss';

import { getFeedback } from '../../axios';
import Message from './Message';

const ChatBox = props => {
    const msgListRef = useRef(undefined);
    const [userMsg, setUserMsg] = useState('');

    const handleKeyDown = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            props.addMessage(e.target.value, 'User');
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
    }, [props.messages, userMsg]);

    useEffect(() => {
        msgListRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });

    return (
        <div className="chatbot-frame">
            <div className="chatbot-box">
                <div className="chatbot-box__header">
                    <span className="title">Ada</span>
                </div>
                <div className="chatbot-box__body">
                    <div className="message-container">
                        <div
                            className="message-container__list"
                            ref={msgListRef}
                        >
                            {props.messages &&
                                props.messages.map((msg, i) => {
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
