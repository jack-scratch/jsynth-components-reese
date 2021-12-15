import React from "react";
import Nut from "./Nut";
import {
	margin
} from "./Layout";

class Port extends React.Component {
	render() {
		const lineHt = 12;

		return (
			<svg className="port">
				<text className="mark" x="50%">{this.props.type}</text>
				<Nut />
				<circle />
			</svg>
		);
	}
};

export default Port;
