import Module from "./Module";

class Worklet extends Module {
	constructor(props) {
		super(props);

		window.ctx.audioWorklet.addModule('dsp.js').then(() => {
			this.state = {
				node: new AudioWorkletNode(window.ctx, "sin")
			};
		});
	}

	render() {
		return (
			<Module name={this.props.name} param={[
				{
					name: "asdf",
					point: this.state.node
				}
			]} port={[
				{
					type: "out",
					point: this.state.node
				}
			]} hookOutDown={this.props.hookOutDown} />
		);
	}
}

Worklet.defaultProps = {
	name: "Oscillator",
	min: 1.0,
	max: 1000.0
};

export default Worklet;
