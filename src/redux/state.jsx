let store = {
  _state:{
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?!", likesCount: 15 },
        { id: 2, message: "It's my first post.", likesCount: 20 },
        { id: 3, message: "It's my second post.", likesCount: 12 },
        { id: 4, message: "It's my next post.", likesCount: 8 },
      ],
      newPostText: '',
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
  },
  _callSubscriber(){
    console.log(1)
  },
  subcsribe (observer){
    this._callSubscriber = observer;
  },
  getState(){
    return this._state
  },
  dispath(action){
    if(action.type === 'ADD-POST'){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
    }
    else if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

// window.store = store;

export {store} 