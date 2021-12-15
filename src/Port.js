import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	render() {
		return (
			<svg className="port" overflow="visible">
				<text className="mark">{this.props.type}</text>
				<Nut />
				<circle />
			</svg>
		);
	}
};

export default Port;
