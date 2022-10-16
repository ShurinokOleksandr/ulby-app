import React from 'react';
import clas from './MyButton.module.css'
const MyButton = ({children ,className,...props}) => {
    return (
        <button {...props}  className={clas.btn}>
            {children}
        </button>
    );
};

export default MyButton;