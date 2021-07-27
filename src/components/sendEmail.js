import React from 'react';
import StatusLabel from './statusLabel.js';

const SendEmail = (props) => {
    const subject = React.useRef(null);
    const message = React.useRef(null);
    const recipient = React.useRef(null);
    return (
        <div id='sendContainer'>
            <form>
                <div id='headContainer'>
                    <div id='headBlockOne'>
                        <label>Subject:</label>
                        <input ref={subject} type='text'></input>
                    </div>
                    <div id='headBlockTwo'>
                        <label>Recipient:</label>
                        <input ref={recipient} type='text'></input>
                    </div>
                </div>
                <div id='messageContainer'>
                    <label>Message:</label>
                    <textarea ref={message}></textarea>
                </div>
                <div id='footContainer'>
                    <StatusLabel value={props.message}/>
                    <button onClick={(event) => {
                        event.preventDefault();
                        let email = {
                            sender: 'jane@galvanize.com',
                            recipient: recipient.current.value,
                            subject: subject.current.value,
                            message: message.current.value,
                        };
                        recipient.current.value = '';
                        subject.current.value = '';
                        message.current.value = '';
                        props.sendEmail(email);
                    }}>Send</button>
                </div>
            </form>
        </div>
    );
};

export default SendEmail;