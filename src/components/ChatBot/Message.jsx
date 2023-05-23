import React from 'react';
import './message.scss';

const Message = props => {
    return (
        <div className="message-box">
            <div className="icon icon--bot" />
            <div className='message'>{props.msg}</div>
        </div>
    );
};

export default Message;
