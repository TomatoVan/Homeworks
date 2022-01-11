import React from 'react'
import {Message} from "./Message";
import s from './HW1.module.css';
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
const messageData = {
	avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
	name: 'Some Name',
	message: "some text",
	time: '22:00',
}

function HW1() {
	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 1</div>

			{/*should work (должно работать)*/}

			<Message
				avatar={messageData.avatar}
				name={messageData.name}
				message={messageData.message}
				time={messageData.time}
			/>

			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeMessage/>*/}
		</div>
	)
}

export default HW1
