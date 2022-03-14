import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate()

    return (
        <div>
            <form>
                <input type="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                <button>sign in</button>
                <button onClick={(e) => { e.preventDefault(); navigate("/register") }} >Go</button>
            </form>
        </div>
    );
};

export default Login;