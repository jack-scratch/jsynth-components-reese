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
					<circle onMouseDown={this.props.hookOut ? (e) => {this.props.hookOut(e, this.node, this.props.point)} : null} onMouseUp={this.props.hookIn ? (e) => {this.props.hookIn(e, this.node, this.props.point)} : null} onMouseEnter={this.props.hookEnter ? (e) => {this.props.hookEnter(e, this.node, this.props.point)} : null} />
				</svg>
			</div>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" point={this.props.point} hookOut={this.props.hookOut} hookIn={this.props.hookIn} hookEnter={this.props.hookEnter} />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" point={this.props.point} hookOut={this.props.hookOut} hookEnter={this.props.hookEnter} />
		);
	}
}

export {
	In,
	Out
};
