import React from 'react';


export const COLORS = {
  primary: "#800000",
  secondary: "#0000ff",
}

export default class UserAvatar extends React.Component {

  render() {
    const colors = this.props.colors || COLORS
    return (
      <div>
        <h1 style={{ color: colors.primary }}>
          {this.props.name ? `${this.props.greeting || 'hi there '} ${this.props.name}!` : 'Hi there!'}
          <button onClick={this.props.onNameChange}>Change my name!</button>
          <button onClick={this.props.onMessageChange}>Change my message!</button>
        </h1>
      </div>
    )
  }
}