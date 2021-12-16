import React from "react";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		this.state = {
			node: this.props.ctx.createOscillator(),
			hz: 440.0
		};

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}

		this.state.node.frequency.value = this.state.hz;

		this.state.node.start();
	}

	render() {
		return (
			<Source name="Oscillator" param={[
				{
					name: "Frequency",
					point: this.state.node.frequqncy
				}
			]} port={[
				"Out"
			]} />
		);
	}
};

export default Osc;
