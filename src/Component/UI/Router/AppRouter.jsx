import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoute,publicRoute} from "../../Router/indexRoute";
import {AuthContext} from "../../../Context/Context";

const AppRouter = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext);
    return (
        isAuth ?
            <Routes>
                {privateRoute.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
                <Route path={'/login'}  element={<Navigate to={'/posts'}/>}/>
            </Routes>
            :
            <Routes>
                {publicRoute.map(route => <Route key={route.path} path={route.path} element={<route.element/>}/>)}
                <Route path={'/*'}  element={<Navigate to={'/login'}/>}/>

            </Routes>
    );
};

export default AppRouter;