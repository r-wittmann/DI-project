import React, {Component} from "react";
import {signUpBackend} from "../../services/authService.js";

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const success = await signUpBackend(this.state.username, this.state.password);

        console.log(success);
    }

    render() {
        return (
            <>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Username:
                        <input
                            type={"text"}
                            onChange={(e) => this.setState({username: e.target.value})}
                        />
                    </div>
                    <div>
                        Password:
                        <input
                            type={"password"}
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                    </div>
                    <button>Sign Up</button>
                </form>
            </>

        )
    }
}
