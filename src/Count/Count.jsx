import React from "react";
import {useDispatch} from "react-redux";
import {addProduct, removeProduct} from "../store/order/orderSlice";
import style from "./Count.module.css";

const Count = ({count, id}) => {
	const dispatch = useDispatch();
	const handleAddCount = () => {
		dispatch(addProduct({id}));
	};
	const handleDeleteCount = () => {
		dispatch(removeProduct({id}));
	};

	return (
		<div className={style.count}>
			<button className={style.minus} onClick={handleDeleteCount}>
				-
			</button>
			<p className={style.amount}>{count}</p>
			<button className={style.plus} onClick={handleAddCount}>
				+
			</button>
		</div>
	);
};

export default Count;
