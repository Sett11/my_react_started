import React from 'react';
import Friend from './Friend';
import s from './Friends.module.css'

const Friends = (state)=>{

    let friendsElements = state.sideBar.friendsPage.map((f) => (
        <Friend name ={f.name} />
      ));

    return(
        <div className={s.item_friends}>
        {friendsElements}
        </div>
    )
}

export default Friends
