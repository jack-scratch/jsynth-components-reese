import Module from "./Module";

class Worklet extends Module {
	constructor(props) {
		super(props);

		this.node = null;
	}

	componentDidMount() {
		window.ctx.audioWorklet.addModule("dsp.js").then(() => {
			this.node = new AudioWorkletNode(window.ctx, this.props.name);
		});
	}

	render() {
		return (
			<Module name={this.props.name} param={[
				{
					name: "asdf",
					point: this.node
				}
			]} port={[
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
