import Module from "./Module";

class Bitcrush extends Module {
	constructor(props) {
		super();

		this.state = {
			bitDepth: null,
			reduction: null
		};
	}

	async componentDidMount() {
		await window.ctx.audioWorklet.addModule("worklet/dsp.js");

		this.node.main = await new AudioWorkletNode(window.ctx, "bitcrush");

		this.setState({
			bitDepth: this.node.main.parameters.get("bitDepth"),
			reduction: this.node.main.parameters.get("frequencyReduction")
		});
	}

	render() {
		return (
			<Module name={this.props.name} param={[
				{
					name: "Fidelity",
					min: 1,
					max: 6,
					quant: 6,
					hook: (val) => {
						this.state.bitDepth.value = val;
					}
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} c={this.props.c} marked={this.props.marked} />
		);
	}
}

Bitcrush.defaultProps = {
	name: "Bitcrush"
};

export default Bitcrush;
