import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from "./HW10.module.css";
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import preloader from "./Spin.svg";

function HW10() {
	let loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
	const dispatch = useDispatch()

	const setLoading = () => {
		dispatch(loadingAC(true))
		setTimeout(() => {
			dispatch(loadingAC(false))
		}, 750)
		console.log('loading...')
	};

	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 10</div>
			{loading
				? (
					<img className={s.preloader} src={preloader} alt={''}/>
				) : (
					<div>
						<SuperButton onClick={setLoading}>set loading...</SuperButton>
					</div>
				)
			}
		</div>
	)
}

export default HW10
