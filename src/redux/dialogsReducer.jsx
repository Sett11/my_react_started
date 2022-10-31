const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
    { id: 7, name: "Buth" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }],
      };
    }
    default:
      return state;
  }

  // if (action.type === UPDATE_NEW_MESSAGE_BODY){
  //     state.newMessageBody = action.body
  //   } else if(action.type === SEND_MESSAGE){
  //     let body = state.newMessageBody
  //     state.newMessageBody = ''
  //     state.messages.push({ id: 7, message: body })
  //   }
  // return state
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
