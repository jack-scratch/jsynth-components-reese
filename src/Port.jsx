import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	render() {
		return (
			<svg className="port" onMouseDown={this.props.hook}>
			<text className="mark" x="50%">{this.props.type === "in" ? "In" : "Out"}</text>
				<Nut />
				<circle />
			</svg>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" hook={this.props.hook} />
		);
	}
}

export {
	In,
	Out
};
