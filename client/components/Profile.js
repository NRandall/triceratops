import { Component } from 'react';
import React from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Profile extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    if(!this.props.auth.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  render(){
    return (
        <div>
          <div>Profile component here</div>
          <p>Username : {this.props.user.username}</p>
          <p>Email : {this.props.user.email}</p>
          <button><Link to="/manage">Manage your Listings</Link></button>
        </div>
      );
  }
}

export default Profile;