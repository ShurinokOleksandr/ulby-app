import React, {useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import NavBar from "./Component/UI/NavBar/NavBar";
import AppRouter from "./Component/UI/Router/AppRouter";
import {AuthContext} from "./Context/Context";


const App = () => {
    const [isAuth,setIsAuth] = useState(false)


    useEffect(() => {
        if(localStorage.getItem('auth')){
            setIsAuth(true)
        }
    },[]);
    return (
        <AuthContext.Provider value={{isAuth, setIsAuth,}}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    );
};

export default App;