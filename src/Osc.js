import React from "react";
import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			node: this.props.ctx.createOscillator()
		};

		this.state.osc.type = this.props.type;
		this.state.node.frequency.value = this.props.hz;

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

export default Op;
