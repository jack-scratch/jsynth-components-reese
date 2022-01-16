import Worklet from "./Worklet";

class Bitcrush extends Worklet {
	constructor(props) {
		super();

		this.node.main = null;
	}

	componentDidMount() {
		window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			this.node.main = new AudioWorkletNode(window.ctx, "bitcrush");

			this.param.bitDepth = this.node.main.parameters.get("bitDepth");

			this.param.bitDepth.setValueAtTime(1.0, 0.0);

			this.param.reduction = this.node.main.parameters.get("frequencyReduction");

			this.param.reduction.setValueAtTime(0.01, window.ctx.currentTime);
			this.param.reduction.linearRampToValueAtTime(0.1, window.ctx.currentTime + 4.0);

			this.node.main.type = this.props.type;
		});
	}

	render() {
		return (
			<Worklet name={this.props.name} param={[
				{
					name: "Fidelity",
					point: this.node.main.parameters.get("bitDepth"),
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
