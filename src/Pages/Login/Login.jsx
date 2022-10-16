import React, {useContext, useEffect} from 'react';
import Input from "../../Component/UI/Form/Input/Input";
import MyButton from "../../Component/UI/Form/MyButton/MyButton";
import clas from './Login.module.css'
import {AuthContext} from "../../Context/Context";
import {Link} from "react-router-dom";

const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)



    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth','true')
    }

    console.log(isAuth)
    return (
        <div className={clas.div}>
           <h1>Login Page</h1>
            <form onSubmit={login} >
                <Input type={'text'} placeholder={'Введите логин'}/>
                <Input type={'password'} placeholder={'Введите пароль'}/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;