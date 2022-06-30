import React, { useState } from "react"
import "../styles/counter.css"

const Counter = function () {
	const [count, setCount] = useState(0)

	function inc() {
		setCount(count + 1)
	}

	function dec() {
		setCount(count - 1)
	}

	return (
		<div className="counter-wrap">
			<h1>{count}</h1>
			<button onClick={inc}>Inc</button>
			<button onClick={dec}>Dec</button>
		</div>
	)
}
export default Counter
