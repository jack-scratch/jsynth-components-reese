import React from "react";
import Effect from "./Effect";

class Feedback extends Effect {
	constructor(props) {
		super(props);

		window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			let node = new AudioWorkletNode(window.ctx, "feedback");
		});

		this.state = {
			hz: 100.0,
			node: window.ctx.createOscillator()
		};
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Iterations",
					point: this.state.node.frequency
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

Feedback.defaultProps = {
	name: "Feedback"
};

export default Feedback;
