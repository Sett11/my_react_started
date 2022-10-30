import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let onSendMessageClick = ()=>{
    props.sendMessage()
  }

  let newMessageBody = state.newMessageBody

  let onNewMessageChanch = (e)=>{
   let body = e.target.value;
   props.updateNewMessageBody(body)
  }

  return (
    <div>
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
      <div>{messagesElements}</div> 
      </div>
    </div>
    <div><textarea value={newMessageBody} onChange={onNewMessageChanch} placeholder="Enter your message"></textarea></div>
    <div><button className={s.button} onClick={onSendMessageClick}>Send</button></div>
    </div>
  );
};

export default Dialogs;
