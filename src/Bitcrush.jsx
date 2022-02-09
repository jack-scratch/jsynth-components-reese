import Module from "./Module";

class Bitcrush extends Module {
	constructor(props) {
		super();

		this.state = {
			bitDepth: null,
			reduct: null
		};
	}

	async componentDidMount() {
		await window.ctx.audioWorklet.addModule("worklet/dsp.js");

		this.node.main = await new AudioWorkletNode(window.ctx, "bitcrush");

		this.setState({
			bitDepth: this.node.main.parameters.get("bitDepth"),
			reduct: this.node.main.parameters.get("freqReduct")
		});
	}

	render() {
		return (
			<Module name="Bitcrush" param={[
				{
					name: "Fidelity",
					min: 1,
					max: 6,
					quant: 6,
					point: this.node.main.bitDepth,
					hook: (val) => {
						this.state.bitDepth.value = val;
					}
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

export default Bitcrush;
