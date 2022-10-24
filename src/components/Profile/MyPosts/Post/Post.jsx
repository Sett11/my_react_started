import React from 'react';
import s from './Post.module.css'

const Post = (props)=>{
    return(
        <div className={s.item}><img src='data:image/jpeg;base64,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'/>
       { props.message }
        <div className='likes'>
        <span>{ props.likes }</span>
        </div>
        </div>
    )
}

export default Post