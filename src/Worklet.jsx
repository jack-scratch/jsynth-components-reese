import Module from "./Module";

class Worklet extends Module {
	componentDidMount() {
		window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
			this.node = new AudioWorkletNode(window.ctx, this.props.name);
		});
	}

	render() {
		return (
			<Module name={this.props.name} param={this.node.parameters.map((el) => ({
				name: this.props.name,
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
