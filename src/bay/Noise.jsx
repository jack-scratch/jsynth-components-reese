import React from "react";
import Source from "./Source";

class Noise extends Source {
	render() {
		return (
			<Source name={this.props.name} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} hookInEnter={this.props.hookInEnter} hookInLeave={this.props.hookInLeave} marked={this.props.marked} />
		);
	}
}

Noise.defaultProps = {
	name: "Noise",
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

export default Noise;
