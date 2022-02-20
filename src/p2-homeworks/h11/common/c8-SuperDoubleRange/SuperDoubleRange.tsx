import React from 'react'
import {Box, Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
	values: number[]
	onChangeDoubleRange: (newValue: number[]) => void
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({values, onChangeDoubleRange}) => {

	const DoubleRangeCallback = (event: Event, newValue: number | number[]) => {
		onChangeDoubleRange(newValue as number[]);
	};

	return (
		<>
			<Box sx={{width: 150}}>
				<Slider
					getAriaLabel={() => 'Temperature range'}
					value={values}
					onChange={DoubleRangeCallback}
					valueLabelDisplay="auto"
				/>
			</Box>
		</>
	)
}


export default SuperDoubleRange