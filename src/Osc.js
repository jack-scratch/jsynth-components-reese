import React from "react";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		this.state = {
			node: this.props.ctx.createOscillator(),
			hz: 440.0
		};

		this.state.node.type = this.props.type;
		this.state.node.frequency.value = this.state.hz;

		this.state.node.start();
	}

	render() {
		return (
			<Source name="Oscillator" ref={this.state.node.frequency} param={[
				{
					name: "Frequency"
				}
			]} port={[
				"Out"
			]} />
		);
	}
};

export default Osc;
