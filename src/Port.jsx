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
					<circle onMouseDown={(e) => {this.props.hookDown(e, this.refer, 3)}} onMouseUp={(e) => {this.props.hookUp(e, this.refer)}} />
				</svg>
			</div>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" hookUp={this.props.hookUp} />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" hookDown={this.props.hookDown} />
		);
	}
}

export {
	In,
	Out
};
