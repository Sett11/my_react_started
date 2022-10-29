import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import sideBarReducer from "./sideBarReducer";

// const ADD_POST =  "ADD-POST";
// const UPDATE_NEW_POST_TEXT =  "UPDATE-NEW-POST-TEXT";

// const UPDATE_NEW_MESSAGE_BODY =  "UPDATE_NEW_MESSAGE_BODY";
// const SEND_MESSAGE = "SEND_MESSAGE"


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?!", likesCount: 15 },
        { id: 2, message: "It's my first post.", likesCount: 20 },
        { id: 3, message: "It's my second post.", likesCount: 12 },
        { id: 4, message: "It's my next post.", likesCount: 8 },
      ],
      newPostText: "",
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
        { id:7, name: "Buth" },
      ],
      newMessageBody: "",
    },
    sideBar: {
      friendsPage: [
        { id: 1, name: "Vasia" },
        { id: 2, name: "Petya" },
        { id: 3, name: "Fedya" },
        { id: 4, name: "Durak" },
      ],
    },
  },
  _callSubscriber() {
    console.log(1);
  },
  subcsribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },
  dispath(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sideBar = sideBarReducer(this._state.sideBar, action)

      this._callSubscriber(this._state);
    }
  }


// const addPostActionCreator = () => ({ type: ADD_POST,})
// const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text,})

// const sendMessageCreator = () => ({ type: SEND_MESSAGE,})
// const updateNewMessageBodyCreator= (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body,})


window.store = store;

export { store };
