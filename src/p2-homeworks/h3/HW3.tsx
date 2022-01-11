import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
// types
export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        setUsers([...users, {_id:v1(), name:name}])
    }

    return (
        <div className={t.wrapper}>
			<div className={t.title}>homeworks 3 </div>

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}

        </div>
    )
}

export default HW3
