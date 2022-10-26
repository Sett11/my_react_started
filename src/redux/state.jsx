import rerenderEntireFree from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi, how are you?!", likesCount: 15 },
      { id: 2, message: "It's my first post.", likesCount: 20 },
      { id: 3, message: "It's my second post.", likesCount: 12 },
      { id: 4, message: "It's my next post.", likesCount: 8 },
    ],
    newPostText: 'w',
  },

  dialogsPage: {
    messages: [
      { id: 1, message: "Hi!" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo!" },
      { id: 4, message: "Oh..." },
      { id: 5, message: "Oh, fack..." },
      { id: 6, message: "Yes!" },
    ],
    dialogs: [
      { id: 1, name: "Jhonny" },
      { id: 2, name: "Bobby" },
      { id: 3, name: "Idiot" },
      { id: 4, name: "Valera" },
      { id: 5, name: "Abram" },
      { id: 6, name: "Adolf" },
    ],
  },
  siteBar: {
    friendsPage: [
      { id: 1, name: "Vasia" },
      { id: 2, name: "Petya" },
      { id: 3, name: "Fedya" },
      { id: 4, name: "Durak" },
    ],
  },
};

let addPost = (postMessage)=>{
  let newPost = {
    id:5,
    message: postMessage,
    likesCount:0
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireFree(state)
}
let upDateNewPostText = (newText)=>{
  state.profilePage.newPostText = newText
  rerenderEntireFree(state)
}


export {state, addPost, upDateNewPostText} 
