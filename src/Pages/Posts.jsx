import React, {useEffect, useState} from "react";
import classes from './Pages.module.css'
import Form from "../Component/UI/Form/Form";
import PostFilter from "../Component/UI/PostFilter/PostFilter";
import PostList from "../Component/Posts/PostList";
import MyModal from "../Component/UI/MyModal/MyModal";
import MyButton from "../Component/UI/Form/MyButton/MyButton";
import {usePosts} from "../Hooks/usePosts";
import FetchPosts from "../API/fetchPosts";
import Loader from "../Component/UI/Loader/Loader";
import {useFetching} from "../Hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {usePagination} from '../Hooks/usePagination';
import Pagination from "../Component/UI/Pagination/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter,setFilter] = useState({sort:'',query:''})
    const [modal,setModal] = useState(false)
    const [totalPages,setTotalPages] = useState(0)
    const [limit,setLimit] = useState(10)
    const [page,setPage] = useState(1)



    const pagesArray = usePagination(totalPages)


    const [fetchPosts,isPostLoading,postError ] = useFetching( async (limit,page) => {
        const response = await FetchPosts.getPosts(limit,page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount,limit))
    })
    useEffect(() => {
        fetchPosts(limit,page)
    },[]);


    const sortedAndSearchedPosts = usePosts(posts,filter.sort,filter.query)

    const creatPost = (newPost) => {
        setPosts([...posts,newPost]);
        setModal(false)
    };

    const removePost = (post) =>{
        setPosts(posts.filter( p => p.id !== post.id))
    }
    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit,page)
    }
    return (
        <div className={classes.pop}>
            <div className={classes.App}>
                <div>
                    <MyButton style={{marginTop:'15px'}} onClick={() => {setModal(true)}} >Добавить пост!</MyButton>
                    <MyModal visible={modal} setVisible={setModal}>
                        <Form creat={creatPost}/>
                    </MyModal>
                    <hr style={{margin:'20px 0'}}/>
                    <PostFilter filter={filter} setFilter={setFilter}/>
                    {isPostLoading ? <div style={{display:'flex',justifyContent:'center',marginTop:'50px'}}><Loader/></div>:<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'List about JS'} />}
                    <Pagination changePage={changePage} page={page} totalPages={totalPages} />
                </div>
            </div>
        </div>

    );
}


export default Posts;