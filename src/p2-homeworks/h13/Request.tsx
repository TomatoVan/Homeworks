import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import s from "./Request.module.css";
import {requestAPI} from "./RequestAPI";

function Request() {

	const [isChecked, setIsChecked] = useState<boolean>(false)
	const [answer, setAnswer] = useState('')

	const setCheckedCallback = () => {
		setIsChecked(!isChecked)
	}

	const post = () => {
		requestAPI.postRequest(isChecked)
			.then(res => {
				console.log(res)
				setAnswer(res.data.errorText)
			})
			.catch(error => {
				console.log({...error});
				console.log(error.response ? error.response.data.errorText : error.message);
				setAnswer(error.response ? error.response.data.errorText : error.message)
			})
	}


	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 13</div>
			<SuperCheckbox checked={isChecked} onChangeChecked={setCheckedCallback}>
				checkbox
			</SuperCheckbox>
			<SuperButton onClick={post}>
				Button
			</SuperButton>
			<div className={s.response}>{answer}</div>
		</div>
	);
};

export default Request;
