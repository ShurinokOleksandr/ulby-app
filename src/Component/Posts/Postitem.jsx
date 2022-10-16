import React from 'react';
import clas from '../../Pages/Pages.module.css'
import MyButton from "../UI/Form/MyButton/MyButton";
import {useNavigate} from "react-router";

const Postitem = (props) => {
    const navigate = useNavigate()
    return (
        <div className={clas.post}>
            <div>
                <h2 >{props.post.id} {props.post.title}</h2>
                <div >
                    <p>{props.post.body}</p>
                </div>
            </div>
            <div className={clas.btns}>
                <MyButton onClick={() => {navigate(`/posts/${props.post.id}`)}}>Открыть</MyButton>
                <MyButton onClick={() => {props.remove(props.post)}}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Postitem;