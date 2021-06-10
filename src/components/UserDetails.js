import React from 'react';

import UserAvatar, { COLORS } from './UserAvatar'


export default class UserDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: 'Bob'
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onRandomName = this.onRandomName.bind(this);
  }


  onNameChange(e){
    this.setState({ name: e.target.value })
  }

  onRandomName(){
    this.setState({ name: this.state.name + '!' })
  }

  render(){
    return (
      <div> 
        Hey Users! 
        <input type="text" value={this.state.name} onChange={this.onNameChange} />

        <UserAvatar name={this.state.name} 
          colors={{ ...COLORS, primary: '#00ff00' }} 
          onNameChange={ this.onRandomName } />
      </div>
    )
  }
}

