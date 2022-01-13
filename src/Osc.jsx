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
					min: 1.0,
					max: 1000.0,
					unit: "freq"
				}, {
					name: "Detune",
					point: this.node.main.detune,
					min: -100.0,
					max: 100.0,
					unit: "cents"
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} hookOutDown={this.props.hookOutDown} hookInUp={this.props.hookInUp} marked={this.props.marked} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator"
};

export default Osc;
