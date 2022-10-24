import React from 'react';
import MyPosts from './MyPosts/Post/MyPosts';
import s from './Profile.module.css'

const Profile = ()=>{
    return(
        <div>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ_G9U9095poYEIvtg8fnA2Ef3dcjLEebptQ&usqp=CAU"/>
        </div>
       <div>
        ava + description
       </div>
       <div>
       <MyPosts />
        </div>
       </div>
    )
}



export default Profile