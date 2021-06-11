import React from 'react';


export let currentComment = '';

export default class CommentPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comment: ''}
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({comment: event.target.value})
        // console.log(this.state.comment)
        // let currentComment = this.state.comment;
    }
    onSubmit(){
        const comment = this.state.comment 
        this.props.onSubmit(comment)
        this.setState({comment: ''})
    }
    render() {
        return (
        <h1>
            Leave a comment!<br/>
            <input
                type="text" 
                style={{width: "400px", height: "10vh",verticalAlign: 'top'}} 
                // onChange={this.props.onEntry}
                onChange={ this.handleChange }
            />
            <button onClick={this.onSubmit}>submit</button>
        </h1>
        );
    }
}