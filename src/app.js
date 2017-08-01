import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render(){
    return (
        <div>
          this is my react app!
        </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
