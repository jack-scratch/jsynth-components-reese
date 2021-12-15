import React from "react";
import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			osc: this.props.ctx.createOscillator()
		};

		this.state.osc.type = "sine";
		this.state.osc.frequency.value = 440.0;

		this.state.osc.start();

		this.state.osc.connect(this.props.ctx.destination);
	}

	render() {
		return (
			<Source name="Oscillator" paramRef={this.state.osc.frequency} param={[
				{
					name: "Frequency"
				}, {
					name: "Volume"
				}
			]} port={[
				"Out"
			]} />
		);
	}
};

export default Op;
