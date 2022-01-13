import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	constructor(props) {
		super();

		this.refer = React.createRef();
	}

	render() {
		return (
			<div ref={this.refer}>
				<svg className="port">
				<text className="mark" x="50%">{this.props.type === "in" ? "In" : "Out"}</text>
					<Nut />
					<circle onMouseDown={this.props.hookDown ? (e) => {this.props.hookDown(e, this.refer, this.props.point)} : null} onMouseUp={this.props.hookUp ? (e) => {this.props.hookUp(e, this.refer, this.props.point)} : null} />
				</svg>
			</div>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" point={this.props.point} hookDown={this.props.hookInDown} hookUp={this.props.hookInUp} />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" point={this.props.point} hookDown={this.props.hookOutDown} />
		);
	}
}

export {
	In,
	Out
};
