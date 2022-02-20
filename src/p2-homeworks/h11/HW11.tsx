import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import s from "./common/c7-SuperRange/SuperRange.module.css";

function HW11() {
	const [values, setValues] = useState<number[]>([20, 75])

	const onChangeRange = (newValue: number) => {
		setValues([newValue, values[1]])
	}
	const onChangeDoubleRange = (newValue: number[]) => {
		setValues(newValue)
	}

	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 11</div>

			<div className={s.changeRange}>
				<span>{values[0]}</span>
				<SuperRange
					value={values[0]}
					onChangeRange={onChangeRange}
				/>
			</div>

			<div>
				<SuperDoubleRange
					values={values}
					onChangeDoubleRange={onChangeDoubleRange}
				/>
				<div className={s.rangeValues}>
					<span>MIN: {values[0]}</span>
					<span>MAX: {values[1]}</span>
				</div>
			</div>
		</div>
	)
}

export default HW11
