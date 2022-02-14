import React from 'react'
import Header from './Header'
import t from "../../p1-main/m1-ui/u1-app/App.module.css";
import AllRoutes from "./Routes";

function HW5() {
	return (
		<div className={t.wrapper}>
			<Header/>
			<AllRoutes/>
		</div>
	)
}

export default HW5
