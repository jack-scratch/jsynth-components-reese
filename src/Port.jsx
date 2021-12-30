import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	constructor(props) {
		super(props);

		this.node = React.createRef();
	}

	render() {
		return (
			<div ref={this.node}>
				<svg className="port">
				<text className="mark" x="50%">{this.props.type === "in" ? "In" : "Out"}</text>
					<Nut />
					<circle onMouseDown={(e) => {this.props.hookDown(e, this.node, this.props.point)}} onMouseUp={(e) => {this.props.hookUp(e, this.node)}} />
				</svg>
			</div>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" point={this.props.point} hookUp={this.props.hookUp} />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" point={this.props.point} hookDown={this.props.hookDown} />
		);
	}
}

export {
	In,
	Out
};
