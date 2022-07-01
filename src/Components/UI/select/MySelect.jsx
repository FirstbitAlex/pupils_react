import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import React from "react";
import "./MySelect.css";

const MySelect = function ({ options, defaultValue, value, onChange }) {
	return (
		<select
			className="my-select"
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			<option disabled value="">
				{defaultValue}
			</option>

			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.name}
				</option>
			))}
		</select>
	);
};
export default MySelect;
