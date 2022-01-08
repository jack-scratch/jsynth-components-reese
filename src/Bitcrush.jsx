import Effect from "./Effect";

class Bitcrush extends Effect {
	constructor(props) {
		super(props);

		window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			let node = new AudioWorkletNode(window.ctx, "bitcrush");

			let paramBitDepth = node.parameters.get("bitDepth");
			paramBitDepth.setValueAtTime(1.0, 0.0);

			let paramReduction = node.parameters.get("frequencyReduction");

			paramReduction.setValueAtTime(0.01, window.ctx.currentTime);
			paramReduction.linearRampToValueAtTime(0.1, window.ctx.currentTime + 4.0);
		});

		this.state = {
			node: window.ctx.createOscillator()
		};

		this.state.node.type = this.props.type;
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Fidelity",
					point: this.state.node.frequency,
					quant: 6
				}
			]} />
		);
	}
}

Bitcrush.defaultProps = {
	name: "Bitcrush"
};

export default Bitcrush;
