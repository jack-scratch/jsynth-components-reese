import Module from "./Module";

class Worklet extends Module {
	constructor(props) {
		super();

		this.param = {};
	}

	async componentDidMount() {
		window.ctx.audioWorklet.addModule(`worklet/{this.props.fName}.js`).then(() => {
			this.node = new AudioWorkletNode(window.ctx, this.props.fName);
		});
	}

	render() {
		return (
			<Module name={this.props.fName} param={this.node.parameters.map((el) => ({
				name: this.props.fName,
				value: el
			}))} port={[
				{
					type: "out",
					point: this.node
				}
			]} hookOutDown={this.props.hookOutDown} />
		);
	}
}

Worklet.defaultProps = {
	name: "Oscillator"
};

export default Worklet;
