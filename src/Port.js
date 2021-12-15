import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	render() {
		return (
			<svg className="port" overflow="visible">
				<Nut />
				<circle />
			</svg>
		);
	}
};

export default Port;
