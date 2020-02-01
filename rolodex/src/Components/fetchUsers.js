import React, {Component} from 'react';
import User from './User'
import './index.css';

class FetchUsers extends Component {
  state = {
      users: [],
      amountOfUsers: ''
  }

SearchInput = (e) => {
    this.setState({amountOfUsers: e.target.value})
    
}
clearQuery = (e) => {
    this.setState({amountOfUsers: ''});
}
    fetchUsers = (e) => {
        e.preventDefault();
        fetch("https://randomuser.me/api?results=" +  this.state.amountOfUsers)
            .then(res => res.json())
            .then(response => {
                this.setState ({users: response.results})
            })
            .catch(error => console.log('parsing failed', error))
            this.clearQuery(e)
    }
    
    render() {
        console.log(this.state.users);
        return (
            <div>
                    <h1>Google Employee Information</h1>
                    <form>
                        <input placeholder="Enter number of users to search" id='usersToSearch' onChange={this.SearchInput}></input>
                        <button onClick={this.fetchUsers}>Get User Data</button>
                    </form>


                    <div className="wrapper"> 
                    {
                    this.state.users.map(user => {
                        return <User user={user}/>
                        })
                    }
                    </div>
            </div>
            
        );
    }
}

export default FetchUsers;