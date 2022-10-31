import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReduser";
// import StoreContext from "../../../storeContext";
import MyPosts from "./Post/MyPosts";

// const MyPostsContainer = (props) => {
// let state = props.store.getState();
// let onAddPost = () => {
//   props.store.dispatch(addPostActionCreator());
// };
// let onPostChange = (text) => {
//   let action = updateNewPostTextActionCreator(text);
//   props.store.dispatch(action);
// };
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();
//         let onAddPost = () => {
//           store.dispatch(addPostActionCreator());
//         };
//         let onPostChange = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };
//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             onAddPost={onAddPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
          dispatch(action);
    },
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
