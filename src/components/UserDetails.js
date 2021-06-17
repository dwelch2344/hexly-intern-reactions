import React from 'react';
import UserAvatar, { COLORS } from './UserAvatar'
import CommentPrompt from './CommentPrompt'
//import {currentComment} from './CommentPrompt'
export default class UserDetails extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'alan',
      bro: 'true',
      comments: []
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.listMake = this.listMake.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.storeData = this.storeData.bind(this);
  }
  componentDidMount() {
    const recipeUrl = 'http://localhost:3000/comments';
    fetch(recipeUrl)
        .then(res => res.json())
        .then( ({comments}) => {
          this.setState({ comments });
        });
  }
  storeData(data) {
    localStorage.setItem('userData',data.target.value)
  }
  listMake(message) {
    console.log({ message })
    const recipeUrl = 'http://localhost:3000/comments';
    const postBody = {
        message,
        user: this.state.name
    };
    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    fetch(recipeUrl, requestMetadata)
        .then(res => res.json())
        .then( (comment) => {
            console.log(comment);
            const comments = this.state.comments
            comments.unshift(comment);
            this.setState({ comments });
        });
  }
  handleNameChange(e) {
    let name = e.target.value
    this.setState({ name })
  }
  handleMessage() {
    let message = this.state.message === 'yo' ? 'hi there' : 'yo'
    this.setState({ message })
  }
  handleClear() {
    let comments = [];
    this.setState({comments})
  }
  render() {
    return (
      <div>
        Hey Users!
        <br />
        <input type="text"
          value={this.state.name}
          onChange={this.handleNameChange} />

        <UserAvatar message={this.state.message}
          onMessageChange={this.handleMessage}
          name={this.state.name}
          onChange={this.storeData}
          />
        <h1>{localStorage.getItem('userData')}</h1>
        <br />
        <CommentPrompt onClear={this.handleClear} onSubmit={this.listMake} />
        <h1>Comments:</h1>
        <ul>{this.state.comments.map(comment =>
          <li>"{comment.message}" <h6>~{comment.user}</h6></li>
        )}</ul>
      </div>
    )
  }
}