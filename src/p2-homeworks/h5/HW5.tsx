import React from 'react'
import Header from './Header'
import s from "../../p1-main/m1-ui/u1-app/App.module.css";
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import {BrowserRouter} from "react-router-dom";
import Routeses from "./Routes";

function HW5() {
	return (
		<BrowserRouter>
			<div className={t.wrapper}>

				<Header/>

				<Routeses/>

			</div>
		</BrowserRouter>
	)
}

export default HW5
