import React from "react";
import Effect from "./Effect";
import {
	unit
} from "../fmt";

class Merger extends Effect {
	node = [];

	constructor() {
		super();
	}

	componentDidMount() {
		for (let i = 0; i < this.props.n; i++) {
			this.node.push(window.ctx.createOscillator());
		}
	}

	render() {
		return (
			<Effect name={this.props.name} port={[...Array(this.props.n).keys().map((i) => {
				type: "in",
				point: this.node.main
			})]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} hookInEnter={this.props.hookInEnter} hookInLeave={this.props.hookInLeave} marked={this.props.marked} />
		);
	}
}

Merger.defaultProps = {
	n: 2
};

export default Merger;
