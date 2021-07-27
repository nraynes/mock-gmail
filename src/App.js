import React from 'react';
import EmailList from './components/emailList.js';
import EmailBox from './components/emailBox.js';
import SearchBar from './components/searchBar.js';
import SendEmail from './components/sendEmail.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailList: [],
      curEmail: {},
      sendStatus: ''
    }
  }
  update(query) {
    let url;
    if (query) {
      url = `${window.serverAddress}/search?query=${query}`
    } else {
      url = `${window.serverAddress}/emails`
    }
    fetch(url)
      .then((data) => {return data.json()})
      .then((data) => {
        let curState = this.state;
        curState.emailList = data;
        this.setState(curState);
      });
  }
  viewEmail(email) {
    let curState = this.state;
    curState.curEmail = email;
    this.setState(curState);
  }
  async sendEmail(email) {
    let response = await fetch(`${window.serverAddress}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email)
    });
    let curState = this.state
    if (response.status === 200) {
      curState.sendStatus = 'The message was sent successfully!'
    } else {
      curState.sendStatus = 'The message failed to send...'
    }
    this.setState(curState);
  }
  componentDidMount() {
    this.update();
  }
  render() {
    return (
      <div className="App">
        <EmailList emailList={this.state.emailList} setEmail={(email) => {this.viewEmail(email)}}/>
        <div>
          <SearchBar searchFunc={(query) => {this.update(query)}}/>
          <EmailBox email={this.state.curEmail}/>
          <SendEmail message={this.state.sendStatus} sendEmail={(email) => {this.sendEmail(email)}}/>
        </div>
      </div>
    );
  }
}

export default App;
