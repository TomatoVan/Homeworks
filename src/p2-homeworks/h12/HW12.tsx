import React from "react";
import s from "./HW12.module.css";
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC, ThemesType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";


const themes = ['dark', 'red', 'some'];

function HW12() {
	const theme = useSelector<AppStoreType, ThemesType>(state => state.theme)
	const dispatch = useDispatch()

	const onChangeCallback = (selectedTheme: ThemesType) => {
		dispatch(changeThemeC(selectedTheme))
	}

	return (
		<div className={t.wrapper}>
			<div className={t.title}>homeworks 12</div>
			<div className={s[theme]}>
				<span className={s[theme + '-text']}>
            </span>
				<div className={s.selectWrap}>
					<div className={s.radio}>
						<SuperRadio
							options={themes}
							value={theme}
							onChangeOption={onChangeCallback}
						/>
					</div>
					<SuperSelect
						options={themes}
						value={theme}
						onChangeOption={onChangeCallback}
					/>
				</div>
			</div>
		</div>

	);
}

export default HW12;
