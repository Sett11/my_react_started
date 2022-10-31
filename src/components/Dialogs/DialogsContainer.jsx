import React from "react";
import { connect } from "react-redux";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogsReducer";
// import StoreContext from "../../storeContext";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
// let state = props.store.getState().dialogsPage;

// let onSendMessageClick = () => {
//   props.store.dispatch(sendMessageCreator());
// };

// let onNewMessageChanch = (body) => {
//   props.store.dispatch(updateNewMessageBodyCreator(body));
// };

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogsPage;
//         let onSendMessageClick = () => {
//           store.dispatch(sendMessageCreator());
//         };
//         let onNewMessageChanch = (body) => {
//           store.dispatch(updateNewMessageBodyCreator(body));
//         };
//         return (
//           <Dialogs
//             updateNewMessageBody={onNewMessageChanch}
//             sendMessage={onSendMessageClick}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
