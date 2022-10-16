import React from 'react';
import Select from "./Select/Select";
import Input from "../Form/Input/Input";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
            <Input
                style={{margin:'10px 0'}}
                placeholder='Search...'
                value={filter.query}
                onChange={e => setFilter({...filter,query:e.target.value})}
            />
            <Select
                value={filter.sort} //Приходит значение, которое выбрал пользователь и попадает в стейт
                onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
                defaultValue={'Сортировка'}
                options={[
                    {value:'title',name:'По названию'},
                    {value:'body',name:'По описанию'},]}/>
        </div>
    );
};

export default PostFilter;