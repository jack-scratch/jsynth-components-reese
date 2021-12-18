import React from "react";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}

		this.state = {
			node: this.props.ctx.createOscillator(),
			hz: 440.0
		};

		this.state.node.frequency.value = this.state.hz;

		this.state.node.start();
	}

	render() {
		return (
			<Source name={this.props.name} refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} port={[
				"out"
			]} />
		);
	}
};

Osc.defaultProps = {
	name: "Oscillator"
};

export default Osc;
