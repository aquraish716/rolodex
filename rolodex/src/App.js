import React, {Component} from 'react'
import './App.css';
import FetchUsers from './Components/fetchUsers';

class App extends Component {
  
  
  render() {
    return (
      <div>
          {<FetchUsers />}
      </div>
    )
}

}

export default App;
