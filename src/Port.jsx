import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg className="port" onMouseDown={this.props.call}>
				<text className="mark" x="50%">{this.props.type == "in" ? "In" : "Out"}</text>
				<Nut />
				<circle />
			</svg>
		);
	}
}

class In extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Port type="in" call={this.props.call} />
		);
	}
}

class Out extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Port type="out" call={this.props.call} />
		);
	}
}

export {
	In,
	Out
};
