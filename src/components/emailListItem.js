import React from 'react';
console.log(React)
class EmailListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            colorClass: 'itemNotClicked'
        };
    };
    changeColor() {
        let curState = this.state;
        curState.clicked = !curState.clicked;
        if (this.state.clicked === true) {
            curState.colorClass = 'itemClicked';
        } else {
            curState.colorClass = 'itemNotClicked';
        };
        this.setState(curState);
    }; 
    render() {
        return (
            <div className={this.state.colorClass} id='emailListItem' onMouseDown={(event) => {
                    event.preventDefault();
                    this.changeColor();
                    this.props.setEmail(this.props.email);
                }} onMouseUp={(event) => {
                    event.preventDefault();
                    this.changeColor();
                }}>
                <p id='subjectContent'>{`Subject: ${this.props.email.subject}`}</p>
                <p id='senderContent'>{`Sender: ${this.props.email.sender}`}</p>
            </div>
        );
    };
};

export default EmailListItem;