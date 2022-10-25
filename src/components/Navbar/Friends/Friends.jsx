import React from 'react';
import s from './Friends.module.css'

const Friends = (props)=>{
    let friendsElements = props.state.map((p) => (
        <Friends name={p.friendsPage.name} />
      ));
    return(
        <div className={s.content}>
        {
            friendsElements
        }
        </div>
    )
}

export default Friends