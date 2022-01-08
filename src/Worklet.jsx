import Module from "./Module";

class Worklet extends Module {
	constructor(props) {
		super(props);

		this.state = {
			node: null
		};
	}

	componentDidMount() {
		window.ctx.audioWorklet.addModule('dsp.js').then(() => {
			this.setState({
				node: new AudioWorkletNode(window.ctx, "sin")
			});
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
	name: "Oscillator"
};

export default Worklet;
