import React from 'react';
import clas from './MyModal.module.css'
const MyModal = ({children,visible,setVisible}) => {

    const rootClasses = [clas.myModal];

    if(visible){
         rootClasses.push(clas.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={clas.myModalContent} onClick={(e) => e.stopPropagation()} >
                {children}
            </div>
        </div>
    );
};

export default MyModal;