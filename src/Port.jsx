import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	constructor(props) {
		super(props);

		this.refer = React.createRef();
	}

	render() {
		return (
			<div ref={this.refer}>
				<svg className="port">
				<text className="mark" x="50%">{this.props.type === "in" ? "In" : "Out"}</text>
					<Nut />
					<circle onMouseDown={(e) => {this.props.hook(e, this.refer)}} />
				</svg>
			</div>
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
