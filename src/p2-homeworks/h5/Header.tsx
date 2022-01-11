import React from 'react'
import s from './HW5.module.css'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";


function Header() {
	return (
		<div className={s.header}>
			<NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? `${s.active}` : `${s.link}`}>PreJunior</NavLink>
			<NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? `${s.active}` : `${s.link}`}>Junior</NavLink>
			<NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? `${s.active}` : `${s.link}`}>JuniorPlus</NavLink>
			<a className={s.block}>
			</a>
		</div>
	)
}

export default Header
