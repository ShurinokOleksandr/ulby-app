import React, {useState} from 'react';

import clas from '../../Pages/Pages.module.css'
import Postitem from "./Postitem";


const PostList = ({posts, title, remove}) => {
    if(!posts.length){
        return <h1 style={{textAlign:'center'}} >
            Посты не найдены!
        </h1>
    }
    return (
        <div>
            <h2 className={clas.bot}>{title}</h2>
            <div>
                {posts.map((p,index) =>
                    <Postitem remove={remove} number={index + 1+'.'} post={p}  key={p.id} />)}
            </div>
        </div>
    );
};

export default PostList;