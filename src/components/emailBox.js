import React from 'react';

class EmailBox extends React.Component {
    render() {
        return (
            <div id='emailBoxContainer'>
                <p>{this.props.email.message}</p>
            </div>
        );
    };
};

export default EmailBox;