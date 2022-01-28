import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import s from "./HW8.module.css";

export type UserType = {
	_id: number
	name: string
	age: number
}

const initialPeople: UserType[] = [
	{_id: 0, name: 'Кот', age: 3},
	{_id: 1, name: 'Александр', age: 66},
	{_id: 2, name: 'Коля', age: 16},
	{_id: 3, name: 'Виктор', age: 44},
	{_id: 4, name: 'Дмитрий', age: 40},
	{_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
	const [people, setPeople] = useState<UserType[]>(initialPeople)

	const finalPeople = people.map((p: UserType) => (
		<div key={p._id} className={s.item}>
			<span>{p.name} </span>
			{p.age}
		</div>
	))

	const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'up'}))
	const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'SORT', payload: 'down'}))
	const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'CHECK-AGE', payload: 18}))

	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 8</div>

			<div className={s.people}>{finalPeople}</div>
			<div className={s.buttons}>
				<div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
				<div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
				<div><SuperButton onClick={checkAge}>check 18</SuperButton></div>
			</div>

		</div>
	)
}

export default HW8
