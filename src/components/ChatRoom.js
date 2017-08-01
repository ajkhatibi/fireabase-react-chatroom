import React, { Component } from 'react';

class ChatRoom extends Component {

  constructor(props, context){
    super(props, context)
    this.updateMessage = this.updateMessage.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.state = {
      message: '',
      messages: []
    }
  }

  componentDidMount(event){
    firebase.database().ref('messages/').on('value', (snapshot)=>{
      const currentMessages = snapshot.val();
      if(currentMessages != null){
        this.setState({
          messages: currentMessages
        })
      }
    })
  }

  updateMessage(event){
    console.log('updateMessage:'+ event.target.value)
    this.setState({
      message: event.target.value
    })
  }

  submitMessage(event){
    console.log("submitMessage:"+this.state.message, 'also passing event:'+event)
    const nextMessage = {
      id: this.state.messages.length,
      text: this.state.message
    }
    firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
    this.refs.inputfield.value = '';
  }

  render(){
    const currentMessage = this.state.messages.map((message, i) => {
      return (
        <li key={message.id}>{message.text}</li>
      )
    })

    return(
      <div>
          <ol>
            {currentMessage}
          </ol>
          <input onChange={this.updateMessage} ref="inputfield" type='text' placeholder='Messages'/>
          <br/>
          <button onClick={this.submitMessage}>Submit Message</button>
      </div>
    )
  }
}

export default ChatRoom
