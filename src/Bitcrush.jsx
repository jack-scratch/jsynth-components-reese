import React from "react";
import Effect from "./Effect";

class Bitcrush extends Effect {
	constructor(props) {
		super(props);

		window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			let bitCrusherNode = new AudioWorkletNode(window.ctx, "bitcrush");

			let paramBitDepth = bitCrusherNode.parameters.get("bitDepth");
			paramBitDepth.setValueAtTime(1.0, 0.0);

			let paramReduction = bitCrusherNode.parameters.get("frequencyReduction");

			paramReduction.setValueAtTime(0.01, window.ctx.currentTime);
			paramReduction.linearRampToValueAtTime(0.1, window.ctx.currentTime + 4.0);
		});

		this.state = {
			hz: 100.0,
			node: window.ctx.createBiquadFilter()
		};

		this.state.node.type = this.props.type;
		this.state.node.frequency.value = this.state.hz;
	}

	render() {
		return (
			<Effect name={this.props.name} node={this.props.node} min={this.props.min} max={this.props.max} />
		);
	}
}

Bitcrush.defaultProps = {
	name: "Bitcrush"
};

export default Bitcrush;
