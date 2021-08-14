import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "./Toast";
import Loading from "./Loading";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";


const Alert = () => {
	const {alert} = useSelector(state => state)
	const dispatch = useDispatch()

	return (
		<div>
			{alert.loading && <Loading/>}
			{alert.error && <Toast alert={alert} handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})} msg={alert.error} text='Error' bgColor='bg-danger'/>}
			{alert.success && <Toast alert={alert} handleShow={() => dispatch({type: GLOBALTYPES.ALERT, payload: {}})} msg={alert.success} text='Success' bgColor='bg-success'/>}
		</div>	
	);
};

export default Alert;
