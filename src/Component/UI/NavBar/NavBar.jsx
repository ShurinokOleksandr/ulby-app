import React, {useContext} from 'react';
import clas from "./NavBar.module.css";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../Context/Context";
import MyButton from "../Form/MyButton/MyButton";

const NavBar = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    const exit = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className={clas.nav}>
            <MyButton onClick={exit}>
                Exit
            </MyButton>
            <div className={clas.item}>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
            </div>
        </div>
    );
};

export default NavBar;