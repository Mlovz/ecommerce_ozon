import React, { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Pages from "./pages/Pages";
import { useDispatch, useSelector } from "react-redux";
import { refreshToken } from "./redux/actions/authAction";

import {infoUser} from './redux/actions/getUserActions'

import Alert from "./components/alert/Alert";

function App() {
	const dispatch = useDispatch();
	const { auth } = useSelector((state) => state);

	useEffect(() => {
		dispatch(refreshToken());
	}, [dispatch]);

	// useEffect(() => {
	// 	if(auth.token) dispatch(infoUser(auth.token));
	// }, [auth.token, dispatch]);


	return (
		<>
			<Alert />

			<div className="App">
				<Header />
				<div className="App_wrap">
					<Pages />
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
