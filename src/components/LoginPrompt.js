import React from 'react';
export default class LoginPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName: "", 
            password: ""
            }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    handleUserChange(event) {
        this.setState({ userName: event.target.value })
        //console.log(this.state.comment)
    }
    handlePassChange(event) {
        this.setState({ password: event.target.value })
        //console.log(this.state.comment)
    }
    handleEnter(e) {
        if (e.key === 'Enter') {
            this.handleClick()
        }
    }
    handleClick() {
        const user = this.state.userName
        const password = this.state.password
        this.props.onSubmit(user, password)
        // this.setState({ userName: '' })
    }
    render() {
        if(!this.props.isLoggedIn){
            return (
            <div>
                <h1>
                    Username: <input
                        value={this.state.userName}
                        type="text"
                        // style={{ width: "400px"}}
                        onChange={this.handleUserChange}
                        onKeyPress={this.handleEnter}
                    />
                    <br/>
                    Password: <input
                        value={this.state.password}
                        type="text"
                        // style={{ width: "400px"}}
                        onChange={this.handlePassChange}
                        onKeyPress={this.handleEnter}
                    />
                    <br/>
                    <button onClick={this.handleClick}>Submit</button>

                </h1>
            </div>
        );}else{
            return(
                <h1>You're already logged in silly!</h1>
            );
        }
    }
}