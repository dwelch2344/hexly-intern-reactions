import React from 'react';
import UserAvatar, { COLORS } from './UserAvatar'
import CommentPrompt from './CommentPrompt'
//import {currentComment} from './CommentPrompt'
export default class UserDetails extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      name: 'Bob',
      comment: '',
      comments: [{message:'great service',user:'Jeffrey'}, {message:'pretty ok',user:'Jennifer'}],
      listComments: []
    }

    this.onNameChange = this.onNameChange.bind(this);
    this.onRandomName = this.onRandomName.bind(this);
    this.listMake = this.listMake.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.listMake()
  }
  listMake(event) {
    
    if(this.state.comment) {
      this.state.comments.unshift({message: this.state.comment, user: this.state.name})
      //try to clear the textbox at some point but idk how
    }
    let listComment = this.state.comments.map(comment => 
      <li>"{comment.message}" <h6>~{comment.user}</h6></li>
    );
    this.setState({listComments: listComment})
  }
  handleChange(event) {
    this.setState({comment: event.target.value})
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
        <br/>
        <input type="text" value={this.state.name} onChange={this.onNameChange} />

        <UserAvatar name={this.state.name} 
          colors={{ ...COLORS, primary: '#00ff00' }} 
          onNameChange={ this.onRandomName } />
        <br/>
        <CommentPrompt onEntry={this.handleChange} onSubmit={this.listMake}/>
        <h1>Comments:</h1>
        <ul>{this.state.listComments}</ul>
      </div>
    )
  }
}

