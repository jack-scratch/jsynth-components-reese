import React from "react";
import Effect from "./Effect";

class Feedback extends Effect {
	constructor(props) {
		super(props);

		window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			this.node.worklet = new AudioWorkletNode(window.ctx, "feedback");
		});
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Iterations",
					point: this.state.node.worklet.frequency
				}
			]} />
		);
	}
}

Feedback.defaultProps = {
	name: "Feedback"
};

export default Feedback;
