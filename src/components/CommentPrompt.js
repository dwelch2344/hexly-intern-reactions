import React from 'react';

export default class CommentPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { comment: "" }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleChange(event) {
        this.setState({ comment: event.target.value })
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
        this.setState({ comment: '' })
    }
    handleClear(){
        this.props.onClear();
    }
    render() {
        return (
            <div>
                <h1>
                    Leave a comment!<br />
                    <input
                        value={this.state.comment}
                        type="text"
                        style={{ width: "400px", height: "10vh", verticalAlign: 'top' }}
                        onChange={this.handleChange}
                        onKeyPress={this.handleEnter}
                    />
                </h1>
                <h1>
                    <button onClick={this.handleClick}>Submit Comments</button>

                </h1>

                <h1>
                    <button onClick={this.handleClear}>Clear Comments</button>

                </h1>
            </div>
        );
    }
}