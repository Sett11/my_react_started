import React from 'react';
import s from './Friends.module.css'

const Friend = (state)=>{
    return(
       <div>
       { state.sideBar.friendsPage.name }
        </div>
       
    )
}
export default Friend