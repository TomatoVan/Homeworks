import React from 'react'
import s from './Message.module.css';

type MessagePropsType = {
	avatar: string
	name: string
	message: string
	time: string
}

export const Message = (props: MessagePropsType) => {
	return (
		<div className={s.message}>
			<img src={props.avatar} alt='post ava'/>
			<div className={s.speechBubble}/>
			<div className={s.postBlock}>
				<h3 className={s.name}>{props.name}</h3>
				<div className={s.text}>{props.message}</div>
				<div className={s.time}>{props.time}</div>
			</div>
		</div>
	)
}


