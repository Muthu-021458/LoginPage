import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state: { email: any; password: any; msg: any; };
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            msg: ''
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleLogin = async () => {
        const { email, password } = this.state;
        try {
            const res = await axios.post('http://localhost:3001/login', {
                email,
                password
            });
            this.setState({ msg: res.data });
        } catch (err) {
            this.setState({
                msg: err.response ? err.response.data : 'Server error'
            });
        }
    };

    render() {
        const { email, password, msg } = this.state;

        return (
            <div style={{ padding: '50px' }}>
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" value={email}
                    onChange={this.handleInputChange}
                /><br /><br />
                <input type="password" name="password" placeholder="Password"
                    value={password}
                    onChange={this.handleInputChange}
                /><br /><br />
                <button onClick={this.handleLogin}>Login</button>
                <p>{msg}</p>
            </div>
        );
    }
}
export default Login;
