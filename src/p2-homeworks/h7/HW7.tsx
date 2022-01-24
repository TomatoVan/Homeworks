import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import t from "../../p1-main/m1-ui/u1-app/App.module.css";

const arr = ['X', 'Y', 'Z']

function HW7() {
	const [value, onChangeOption] = useState(arr[1])

	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 7</div>
			<div>
				<SuperSelect
					options={arr}
					value={value}
					onChangeOption={onChangeOption}
				/>
			</div>
			<div>
				<SuperRadio
					name={'radio'}
					options={arr}
					value={value}
					onChangeOption={onChangeOption}
				/>
			</div>
		</div>
	)
}

export default HW7
