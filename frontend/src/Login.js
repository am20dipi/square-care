import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
              <h1>Login</h1>
              <form>
                <div>
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div>
                  <input type="password" name="password" placeholder="Password" />
                </div><br></br>
                <input type="submit" value="Login" />
              </form>
            </div>
        )
    }
} 


export default Login;