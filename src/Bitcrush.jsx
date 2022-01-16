import Worklet from "./Worklet";

class Bitcrush extends Worklet {
	constructor(props) {
		super();
	}

	async componentDidMount() {
		await window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			this.node.main = new AudioWorkletNode(window.ctx, "bitcrush");

			this.param.bitDepth = this.node.main.parameters.get("bitDepth");
			this.param.reduction = this.node.main.parameters.get("frequencyReduction");
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
