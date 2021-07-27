
import EmailListItem from './emailListItem.js';
import React from 'react';

class EmailList extends React.Component {
    render() {
        return (
            <div id='emailListContainer'>
                {this.props.emailList.map((email) => {return (<EmailListItem email={email} setEmail={(email) => {this.props.setEmail(email)}}/>)})}
            </div>
        );
    };
};
  
export default EmailList;