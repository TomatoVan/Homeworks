import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import s from './common/c4-SuperEditableSpan/SuperEditableSpan.module.css'

function HW6() {
	const [value, setValue] = useState<string>('')

	const save = () => {
		saveState<string>('editable-span-value', value)
	}
	const restore = () => {
		setValue(restoreState<string>('editable-span-value', ''))
	}

	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 6</div>
			<SuperEditableSpan
				value={value}
				onChangeText={setValue}
				spanProps={{children: value ? undefined : ' Enter text...'}}
			/>
			<div className={s.buttons}>
				<SuperButton onClick={save}>save</SuperButton>
				<SuperButton onClick={restore}>restore</SuperButton>
			</div>
		</div>
	)
}

export default HW6
