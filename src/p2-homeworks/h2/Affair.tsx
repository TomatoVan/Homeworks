import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'


type AffairPropsType = {
	affair: AffairType
	deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id)
	}


	return (
		<div className={s.wrapper}>
			<span className={s.name}>{props.affair.name}</span>
			<span className={s[props.affair.priority]}>{props.affair.priority}</span>
			<button className={s.delete} onClick={deleteCallback}>X</button>

		</div>
	)
}

export default Affair
