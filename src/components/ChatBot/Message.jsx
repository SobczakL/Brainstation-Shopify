import React from 'react';
import './message.scss';

const Message = props => {
    return props.sender === 'Bot' ? (
        <div className="message-box">
            <div className="icon icon--bot" />
            <div className="message">{props.msg}</div>
        </div>
    ) : (
        <div className="message-box message-box--user">
            <div className="message">{props.msg}</div>
            <div className="icon icon--user" />
        </div>
    );
};

export default Message;
