import React from "react";
import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			osc: this.props.ctx.createOscillator(),
			amp: this.props.ctx.createGain()
		};

		this.state.osc.type = this.props.type;
		this.state.osc.frequency.value = this.props.hz;

		this.state.amp.gain.value = this.props.level;

		this.state.osc.start();

		this.state.osc.connect(this.state.amp);
		this.state.amp.connect(this.props.ctx.destination);
	}

	render() {
		return (
			<Source name="Operator" paramRef={this.state.osc.frequency} param={[
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
}

export default Op;
