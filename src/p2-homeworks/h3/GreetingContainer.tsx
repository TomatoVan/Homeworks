import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
	users: Array<UserType>
	addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
	const [name, setName] = useState<string>('')
	const [error, setError] = useState<string>('')

	const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => {
		const inputName = event.currentTarget.value.trim();
		if (inputName) {
			setName(inputName)
			setError('')
		} else {
			setName('')
			setError('name is required!')
		}

	}
	const addUser = () => {
		addUserCallback(name)
		setName('')
		alert(`Hello ${name}!`)
	}

	const onEnter = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && name) addUser()
	}

	const totalUsers = users.length

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			error={error}
			totalUsers={totalUsers}
			onEnter={onEnter}
		/>
	)
}

export default GreetingContainer
