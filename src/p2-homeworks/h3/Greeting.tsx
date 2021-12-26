import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
type GreetingPropsType = {
    name: string
    setNameCallback: (event:ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
	onEnter: (event:KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error? s.error : s.notError
    return (
        <div>
            <input value={name} onChange={setNameCallback} onKeyDown={onEnter}  className={inputClass }/>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span>{totalUsers}</span>
			<div>
				<span className={s.errorText}>{error}</span>
			</div>
        </div>
    )
}

export default Greeting
