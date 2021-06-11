import React from 'react';



export default class CommentPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comment: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    handleChange(event) {
        this.setState({comment: event.target.value})
        //console.log(this.state.comment)
    }
    handleEnter(e) {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }
    handleClick() {
        const message = this.state.comment
        this.props.onSubmit(message)
        this.setState({comment: ''})
    }
    render() {
        return (
        <h1>
            Leave a comment!<br/>
            <input
                value={this.state.comment}
                type="text" 
                style={{width: "400px", height: "10vh",verticalAlign: 'top'}} 
                onChange={this.handleChange}
                onKeyPress={this.handleEnter}
            />
            <button onClick={this.handleClick}>submit</button>
        </h1>
        );
    }
}