import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <h2>Login Page</h2>
                <form>
                    <div>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;