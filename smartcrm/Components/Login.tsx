import React, { FormEvent, useState } from 'react';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    
        fetch('http://localhost:5173/auth/adminlogin', {
            method: 'POST',
            mode: 'no-cors',
            credentials: 'include', // This replaces axios.defaults.withCredentials = true
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(result => {
            if (result.loginStatus) {
                localStorage.setItem("valid", "true");
                window.location.href = '/dashboard';
                console.log(result);
            } else {
                console.error(result.Error);
            }
        })
        .catch(err => console.log(err));
    };
    

    return (
        <div>
            <div>
                <h2>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input type="email" id="Email" placeholder='Email' onChange={(e) => setValues({...values, email: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password: </label>
                            <input type="password" id="password" placeholder='Password' onChange={(e) => setValues({...values, password: e.target.value})} /> 
                        </div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;