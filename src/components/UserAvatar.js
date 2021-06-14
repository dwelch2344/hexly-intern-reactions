import React from 'react';
import userEnter from './UserDetails';

export const COLORS = {
  primary: "#ffffff",
  secondary: "#ffffff",
}

export default class UserAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.userEnter = this.userEnter.bind(this);
  }
  userEnter(e) {
    if(e.key === 'Enter') {
      this.props.onChange(e)
    }
  }
  render() {
    const colors = this.props.colors || COLORS
    return (
      <div>

        <h1 style={{ color: colors.primary }}>
          {this.props.name ? `${this.props.message || 'hi there '} ${this.props.name}!` : 'Hi there!'}
        </h1>

        <h1>
          <button onClick={this.props.onMessageChange}>Change my message!</button>
        </h1>
          <input type="text" onChange={this.props.onChange} onKeyDown={this.userEnter}/>
      </div>
    )
  }
}