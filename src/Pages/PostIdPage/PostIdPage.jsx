import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {useFetching} from "../../Hooks/useFetching";
import fetchPosts from "../../API/fetchPosts";
import Loader from "../../Component/UI/Loader/Loader";
import FetchPosts from "../../API/fetchPosts";

const PostIdPage = () => {
    const param = useParams()
    const [post,setPost] = useState([])
    const [com,setCom] = useState([])
    const [fetchPostById,isLoading,Error] = useFetching(async (id) =>{
        const response = await fetchPosts.getById(id);
        setPost(response.data)

    })
    const [fetchComById,error] = useFetching(async (id) =>{
        const response = await fetchPosts.getComById(id)
        setCom(response.data)
    })
    useEffect(() => {
        fetchPostById(param.id)
        fetchComById(param.id)
    },[]);

    return (
        <div>
            <h1>Вы открыли страницу с ID={param.id}</h1>
            {isLoading ? <Loader/> : <p>{post.id}. {post.title}</p>}
            <h1>Комментарии</h1>
            {isLoading ? <Loader/> :
                <div>
                    {com.map(c => <div style={{margin:'10px 0'}}>
                            <h2>Имя : {c.name} Email: {c.email}</h2>
                            <p>Коммнтарий:{c.body}</p>
                    </div>)}
                </div>}
        </div>
    );
};

export default PostIdPage;