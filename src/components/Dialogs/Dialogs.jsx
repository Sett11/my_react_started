import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = [
    { id: 1, name: "Jhonny" },
    { id: 2, name: "Bobby" },
    { id: 3, name: "Idiot" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Abram" },
    { id: 6, name: "Adolf" },
  ];

  let messages = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo!" },
    { id: 4, message: "Oh..." },
    { id: 5, message: "Oh, fack..." },
    { id: 6, message: "Yes!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
      {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
