import React, {useState} from 'react';
import Input from "./Input/Input";
import MyButton from "./MyButton/MyButton";

const Form = ({creat}) => {
    const [post,setPost] = useState({title:'', about:''});
    const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {...post,id: Date.now()};
        creat(newPost);
        setPost({title: '',about: ''});

    };

    return (
        <form >
            <Input
                type="text"
                placeholder='Название поста'
                value={post.title}
                onChange={e => setPost({...post,title: e.target.value})}/>
            <Input
                type="text"
                placeholder='Описание поста'
                value={post.about}
                onChange={e => setPost({...post,about: e.target.value})} />
            <MyButton onClick={addNewPost}  >Добавить</MyButton>
        </form>
    );
};

export default Form;