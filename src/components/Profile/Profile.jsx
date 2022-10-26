import React from "react";
import MyPosts from "./MyPosts/Post/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} addPost={props.addPost} newPostText={props.profilePage.newPostText}/>
    </div>
  );
};

export default Profile;
