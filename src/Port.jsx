import React from "react";
import Nut from "./Nut";

class Port extends React.Component {
	constructor(props) {
		super();

		this.state = {
			c: 0
		};

		this.refer = React.createRef();

		this.setActive = this.setActive.bind(this);
	}

	setActive() {
		this.setState({
			c: this.props.c
		}, () => {
			this.props.hookUp(this.refer, this.props.point, this.state.c);
		});
	}

	render() {
		return (
			<div ref={this.refer}>
				<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className="port">
				<text className="mark" x="50%">{this.props.type === "in" ? "In" : "Out"}</text>
					<Nut />
					<circle onMouseDown={this.props.hookDown ? (e) => {this.props.hookDown(e, this.refer, this.props.point, this.state.c)} : null} onMouseUp={() => this.setActive()} />
				</svg>
			</div>
		);
	}
}

class In extends React.Component {
	render() {
		return (
			<Port type="in" point={this.props.point} c={this.props.c} hookDown={this.props.hookInDown} hookUp={this.props.hookInUp} />
		);
	}
}

class Out extends React.Component {
	render() {
		return (
			<Port type="out" point={this.props.point} c={this.props.c} hookDown={this.props.hookOutDown} />
		);
	}
}

export {
	In,
	Out
};
