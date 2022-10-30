import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReduser";
import MyPosts from "./Post/MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPosts
      updateNewPostText={onPostChange}
      onAddPost={onAddPost}
      posts={state.profilePage.posts}
      newPostText={state.profilePage.newPostText}
    />
  );
};

export default MyPostsContainer;
