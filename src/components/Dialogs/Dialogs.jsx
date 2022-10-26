import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  let newMessageElement = React.createRef()
  let addMessage = ()=>{
    let text = newMessageElement.current.value
    alert('text')
  } 

  return (
    <div>
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
      {messagesElements}
      </div>
    </div>
    <textarea ref={newMessageElement}></textarea>
    <button className={s.button} onClick={addMessage}>Add message</button>
    </div>
  );
};

export default Dialogs;
