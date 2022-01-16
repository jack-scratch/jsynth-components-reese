import React from "react";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createOscillator();

		if (this.props.type) {
			this.node.main.type = this.props.type;
		}
	}

	componentDidMount() {
		this.node.main.start();
	}

	render() {
		return (
			<Source name={this.props.name} param={[
				{
					name: "Frequency",
					point: this.node.main.frequency,
					min: this.props.rngFreq[0],
					max: this.props.rngFreq[1],
					unit: "freq"
				}, {
					name: "Detune",
					point: this.node.main.detune,
					min: this.props.rngDetune[0],
					max: this.props.rngDetune[1],
					unit: "cents"
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
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
