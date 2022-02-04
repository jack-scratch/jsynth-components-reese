import React from "react";
import Source from "./Source";
import {
	unit
} from "./fmt";

class Osc extends Source {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createOscillator();

		if (this.props.type) {
			this.node.main.type = this.props.type;
		}

		if (this.props.hz) {
			this.node.main.frequency.value = this.props.hz;
		}

		if (this.props.detune) {
			this.node.main.detune.value = this.props.detune;
		}
	}

	render() {
		return (
			<Source name={this.props.name} param={[
				{
					name: "Frequency",
					min: this.props.rng["freq"][0],
					max: this.props.rng["freq"][1],
					unit: unit["freq"],
					hook: (val) => {
						this.node.main.frequency.value = val;
					}
				}, {
					name: "Detune",
					min: this.props.rng["detune"][0],
					max: this.props.rng["detune"][1],
					unit: unit["cents"],
					hook: (val) => {
						this.node.main.detune.value = val;
					} 
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator",
	rng: {
		"freq": [
			1.0,
			1000.0
		],
		"detune": [
			-100.0,
			100.0
		]
	}
};

export default Osc;
