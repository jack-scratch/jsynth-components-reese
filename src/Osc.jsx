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
					point: this.node.main.frequency,
					min: this.props.rngFreq[0],
					max: this.props.rngFreq[1],
					unit: unit["time"][0]
				}, {
					name: "Detune",
					point: this.node.main.detune,
					min: this.props.rngDetune[0],
					max: this.props.rngDetune[1],
					unit: unit["cents"]
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} activeCable={this.props.activeCable} marked={this.props.marked} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator",
	rngFreq: [
		1.0,
		1000.0
	],
	rngDetune: [
		-100.0,
		100.0
	]
};

export default Osc;
