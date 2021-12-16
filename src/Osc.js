import React from "react";
import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			osc: this.props.ctx.createOscillator()
		};

		this.state.osc.type = this.props.type;
		this.state.osc.frequency.value = this.props.hz;

		this.state.osc.start();
	}

	render() {
		return (
			<Source name="Oscillator" ref={this.state.osc.frequency} param={[
				{
					name: "Frequency"
				}
			]} port={[
				"Out"
			]} />
		);
	}
};

export default Op;
