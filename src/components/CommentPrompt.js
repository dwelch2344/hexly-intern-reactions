import React from 'react';


export let currentComment = '';

export default class CommentPrompt extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {comment: ''}
    //     // this.handleChange = this.handleChange.bind(this);
    // }
    // handleChange(event) {
    //     this.setState({comment: event.target.value})
    //     console.log(this.state.comment)
    //     let currentComment = this.state.comment;
    // }
    render() {
        return (
        <h1>
            Leave a comment!<br/>
            <input
            type="text" 
            style={{width: "400px", height: "10vh",verticalAlign: 'top'}} 
            onChange={this.props.onEntry}
            />
            <button onClick={this.props.onSubmit}>submit</button>
        </h1>
        );
    }
}