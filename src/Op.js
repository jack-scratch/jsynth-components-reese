import React from "react";
import Source from "./Source";
import {
	a
} from "./math";

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
	}

	render() {
		return (
			<Source name="Operator" refer={[
				{
					name: "Frequency",
					point: this.state.osc.frequency
				}, {
					name: "Volume",
					point: this.state.amp.gain
				}
			]} port={[
				"Out"
			]} />
		);
	}
}

Op.defaultProps = {
	hz: a,
	level: 0.0
};

export default Op;
