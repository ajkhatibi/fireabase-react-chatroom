import React, { Component } from 'react';

class ChatRoom extends Component {

  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this);
    this.state = {
      messages: []
    }
  }

  updateMessage(event){
    console.log('updateMessage')
  }

  render(){
    const currentMessage = this.state.messages.map((message, i) => {
      return (
        <li key={message.id}>{message.text}</li>
      )
    })
  }

  render(){
    return(
      <div>
          <ol>
            {this.currentMessage}
          </ol>
          <input onChange={this.updateMessage} type='text' placeholder='Messages'/>
          <br/>
          <button>Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom
