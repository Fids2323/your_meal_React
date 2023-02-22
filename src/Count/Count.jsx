import React, {useState} from "react";
import style from "./Count.module.css";

const Count = (props) => {
	const [count, setCount] = useState(props.count);

	const handleAddCount = () => {
		setCount(count + 1);
	};
	const handleDeleteCount = () => {
		if (count > 1) setCount(count - 1);
	};

	return (
		<div className={style.count}>
			<button className={style.minus} onClick={handleDeleteCount} disabled={count === 1}>
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
