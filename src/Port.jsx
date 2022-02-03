import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	constructor(props) {
		super();

		this.refer = React.createRef();

		this.state = {
			i: 0
		};

		this.hookSetActive = this.hookSetActive.bind(this);
	}

	hookSetActive() {
		this.setState({
			i: this.props.c
		}, () => {
			this.props.hookUp(this.refer, this.props.point, this.state.i);
		});
	}

	render() {
		return (
			<div ref={this.refer}>
				<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className="port">
				<text className="mark" x="50%">{this.props.type === "in" ? "In" : "Out"}</text>
					<Nut />
					<circle onMouseDown={this.props.hookDown ? (e) => {this.props.hookDown(e, this.refer, this.props.point, this.state.i)} : null} onMouseUp={() => this.hookSetActive()} />
				</svg>
			</div>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" point={this.props.point} hookDown={this.props.hookInDown} hookUp={this.props.hookInUp} c={this.props.c} />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" point={this.props.point} hookDown={this.props.hookOutDown} c={this.props.c} />
		);
	}
}

export {
	In,
	Out
};
