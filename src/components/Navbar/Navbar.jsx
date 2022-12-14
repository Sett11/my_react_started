import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'


const Navbar = ()=>{
    return(
        <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
        </div>
      <div className={s.item}> <NavLink to='/dialogs' className = { navData => navData.isActive ? s.active : s.item }>Message</NavLink>
      </div>
      <div className={s.item}> <NavLink to='/users' className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
      </div>
      <div className={s.item}> <NavLink to='/news' className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
      </div>
      <div className={s.item}> <NavLink to='/music' className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
      </div>
      <div className={s.item}> <NavLink to='/setting' className = { navData => navData.isActive ? s.active : s.item }>Setting</NavLink>
      </div>
      <div className={s.item}>
      <h3> <NavLink to='/friends' className = { navData => navData.isActive ? s.active : s.item }>Friends</NavLink>
      </h3>
      </div>
     </nav>
    )
}

export default Navbar