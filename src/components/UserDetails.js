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
      comments: [{ message: 'great service', user: 'Jeffrey' }, { message: 'pretty ok', user: 'Jennifer' }]
    }

    // this.onNameChange = this.onNameChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.listMake = this.listMake.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.storeData = this.storeData.bind(this);
  }
  componentDidMount() {
    const raw = localStorage.getItem('commentsArray')
    let comments = []
    if (raw) {
      comments = JSON.parse(raw)
    }

    this.setState({ comments })
  }
  storeData(data) {
    localStorage.setItem('userData',data.target.value)
  }
  listMake(message) {
    console.log({message})
    // OPTION a: update the variable of "comments"
    // let comments = this.state.comments
    // comments = [{message, user: this.state.name},...comments]

    // OPTION b: change the contents of variable "comments"
    const comments = this.state.comments
    // comments.push({ message, user: this.state.user }) // adds to end
    comments.unshift({ message, user: this.state.name })
    this.setState({ comments })
    localStorage.setItem('commentsArray', JSON.stringify(this.state.comments));
    console.log(localStorage.getItem('commentsArray'));
  }
  // handleChange(event) {
  //   this.setState({comment: event.target.value})
  // }
  handleNameChange(e) {
    //let name = this.state.name === 'alan' ? 'logan' : 'alan'
    let name = e.target.value
    this.setState({ name })
    // this.setState({ name: e.target.value })
  }
  handleMessage() {
    let message = this.state.message === 'yo' ? 'hi there' : 'yo'
    this.setState({ message })
    // this.setState({ message: e.target.value })
  }
  // onRandomName() {
  //   this.setState({ name: this.state.name + '!' })
  // }
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
          // colors={{ ...COLORS /*,primary: '#00ff00' */ }}
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