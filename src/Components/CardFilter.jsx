import React from "react";
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

// import classes from "./CardFilter.module.css";

const CardFilter = function ({ filter, setFilter }) {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={(e) =>
					setFilter({ ...filter, query: e.target.value })
				}
				placeholder="Search"
			/>
			<MySelect
				value={filter.sort}
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				defaultValue="Sort by:"
				options={[
					{ value: "name", name: "name" },
					{ value: "username", name: "spirit" },
					{ value: "email", name: "email" },
				]}
			/>
		</div>
	);
};
export default CardFilter;
