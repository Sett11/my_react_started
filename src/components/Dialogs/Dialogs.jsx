import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props)=>{
    return(
        <div className={s.dialogs}>
        <div className={s.dialogs_items}>
            <div className={`${s.dialog} ${s.active}`}>
               <NavLink to='dialogs/1'>Jhonny</NavLink> 
            </div>
            <div className={s.dialog}>
                <NavLink to='dialogs/2'>Bobby</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to='dialogs/3'>Idiot</NavLink> 
            </div>
            <div className={s.dialog}>
               <NavLink to='dialogs/4'>Valera</NavLink> 
            </div>
        </div>
        <div className={s.messages}>
            <div className={s.message}>Hi</div>
            <div className={s.message}>How are you</div>
            <div className={s.message}>You</div>
</div>
        </div>
    )
}

export default Dialogs
