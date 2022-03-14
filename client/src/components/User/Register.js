import React, { useState } from 'react';
import firebase from "../../firebase.js"
import { getAuth, createUserWithEmailAndPassword } from "firebase/compat/auth";

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")



    let navigate = useNavigate()


    const RegisterFunc = async (e) => {
        e.preventDefault();
        if (!(name && email && password && passwordCheck)) {
            return alert('Fill all the empty')
        }
        if (password !== passwordCheck) {
            return alert("password not match")
        }
        let createdUser = await firebase.auth().createUserWithEmailAndPassword(email, password)

        await createdUser.user.updateProfile({
            displayName: name,
        })

        let body = {
            email: createdUser.user.multiFactor.user.email,
            displayName: createdUser.user.multiFactor.user.displayName,
            uid: createdUser.user.multiFactor.user.uid,
        }
        axios.post("/api/user/register", body).then((response) => {
            if (response.data.success) {
                //회원가입 성공시
                navigate("/login")
            } else {
                //회원가입 실패시
                return alert("F a i l")
            }
        })

    }





    return (
        <div>
            <label>name</label>
            <input type="name" onChange={(e) => setName(e.currentTarget.value)} />
            <label>email</label >
            <input type="email" onChange={(e) => setEmail(e.currentTarget.value)} />
            <label>password</label>
            <input type="password" onChange={(e) => setPassword(e.currentTarget.value)} />
            <label>password check</label>
            <input type="password" onChange={(e) => setPasswordCheck(e.currentTarget.value)} />
            <button onClick={RegisterFunc}>sign up</button>

        </div>
    );
};

export default Register;