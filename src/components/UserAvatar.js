import React from 'react';


export const COLORS = {
  primary: "#ffffff",
  secondary: "#ffffff",
}

export default class UserAvatar extends React.Component {

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

        <h1>
          <button onClick={this.props.onNameChange}>Change User</button>
        </h1>

      </div>
    )
  }
}