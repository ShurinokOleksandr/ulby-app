import React from "react";
import Posts from "../../Pages/Posts";
import AboutPosts from "../../Pages/AboutPosts/AboutPosts";
import PostIdPage from "../../Pages/PostIdPage/PostIdPage";
import ErrorPage from "../../Pages/ErrorPage";
import Login from "../../Pages/Login/Login";

export const privateRoute = [
    {path:'/posts',element : Posts,},
    {path:'/about',element: AboutPosts,},
    {path:'/posts/:id',element: PostIdPage,},
    {path:'/error',element: ErrorPage,},
]
export const publicRoute = [
    {path:'/login', element : Login,}
]