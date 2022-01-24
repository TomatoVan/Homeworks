import React from 'react'
import Header from './Header'
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import {BrowserRouter} from "react-router-dom";
import AllRoutes from "./Routes";

function HW5() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<div className={t.wrapper}>

				<Header/>

				<AllRoutes/>

			</div>
		</BrowserRouter>
	)
}

export default HW5
