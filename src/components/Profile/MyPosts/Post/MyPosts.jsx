import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../../redux/profileReduser";
import s from "./MyPosts.module.css";
import Post from "./Post";



const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispath(addPostActionCreator());
  };
  let onPostChange = ()=>{
      let text = newPostElement.current.value;
      // props.addPost(text);
      let action = updateNewPostTextActionCreator(text)
       props.dispath(action);
       newPostElement.current.value = '';
}
   return (
  <div className={s.postsBlock}>
  <h3>My posts</h3>
  <div>
      <div>
          <textarea ref={newPostElement} 
                    value={props.newPostText} onChange={onPostChange}/>
      </div>
      <div>
          <button onClick={ addPost } >Add post</button>
      </div>
  </div>
  <div className={s.posts}>
      { postsElements }
  </div>
</div>
)
}

export default MyPosts;