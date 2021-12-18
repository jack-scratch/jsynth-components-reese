import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	render() {
		return (
			<svg className="port">
				<text className="mark" x="50%">{this.props.type}</text>
				<Nut />
				<circle />
			</svg>
		);
	}
}

export default Port;
