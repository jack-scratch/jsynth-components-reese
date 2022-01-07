import React from "react";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		this.node = window.ctx.createOscillator();

		if (this.props.type) {
			this.node.type = this.props.type;
		}

		this.node.start();
	}

	render() {
		return (
			<Source name={this.props.name} param={[
				{
					name: "Frequency",
					point: this.node.frequency,
					min: 1.0,
					max: 1000.0
				}, {
					name: "Detune",
					point: this.node.detune
				}
			]} port={[
				{
					type: "out",
					point: this.node
				}
			]} hookDown={this.props.hookDown} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator"
};

export default Osc;
