import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={"dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Jhonny" },
    { id: 2, name: "Bobby" },
    { id: 3, name: "Idiot" },
    { id: 4, name: "Valera" },
    { id: 5, name: "Abram" },
    { id: 6, name: "Adolf" },
  ];

  let messagesData = [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo!" },
    { id: 4, message: "Oh..." },
    { id: 5, message: "Oh, fack..." },
    { id: 6, message: "Yes!" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id} />
      </div>
      <div className={s.messages}>
        <MessageItem message={messagesData[0].message} />
        <MessageItem message={messagesData[1].message} />
        <MessageItem message={messagesData[2].message} />
        <MessageItem message={messagesData[3].message} />
        <MessageItem message={messagesData[4].message} />
        <MessageItem message={messagesData[5].message} />
      </div>
    </div>
  );
};

export default Dialogs;
