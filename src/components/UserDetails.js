import React from 'react';
import UserAvatar, { COLORS } from './UserAvatar'
import CommentPrompt from './CommentPrompt'
//import {currentComment} from './CommentPrompt'
export default class UserDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: 'Bob',
      comments: [{message:'great service',user:'Jeffrey'}, {message:'pretty ok',user:'Jennifer'}]
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onRandomName = this.onRandomName.bind(this);
    this.listMake = this.listMake.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }
  listMake(message) {
    // OPTION a: update the variable of "comments"
    // let comments = this.state.comments
    // comments = [{message, user: this.state.name},...comments]

    // OPTION b: change the contents of variable "comments"
    const comments = this.state.comments
    // comments.push({ message, user: this.state.user }) // adds to end
    comments.unshift({message, user: this.state.name})
    this.setState({comments})
  }
  // handleChange(event) {
  //   this.setState({comment: event.target.value})
  // }
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
        <br/>
        <input type="text" value={this.state.name} onChange={this.onNameChange} />

        <UserAvatar name={this.state.name} 
          colors={{ ...COLORS, primary: '#00ff00' }} 
          onNameChange={ this.onRandomName } />
        <br/>
        <CommentPrompt onSubmit={this.listMake}/>
        <h1>Comments:</h1>
        <ul>{this.state.comments.map(comment => 
          <li>"{comment.message}" <h6>~{comment.user}</h6></li>
        )}</ul>
      </div>
    )
  }
}