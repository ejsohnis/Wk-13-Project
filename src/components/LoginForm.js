import React from 'react';

import LoginButton from './LoginButton';
import Username from './Username';
import Password from './Password';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="Center">
                <div className="flexCol">
                    <h3>Log In</h3><br></br>
                    <Username></Username><br></br>
                    <Password></Password><br></br>
                    <LoginButton></LoginButton><br></br>
                </div>
            </div>)
    }
}

//h3 Login In, Username, Password and LogiButton is on ceneter of page