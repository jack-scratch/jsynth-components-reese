import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			osc: window.ctx.createOscillator(),
			amp: window.ctx.createGain()
		};

		this.state.osc.type = this.props.type;

		this.state.osc.start();

		this.state.osc.connect(this.state.amp);
	}

	render() {
		return (
			<Source name="Operator" param={[
				{
					name: "Frequency",
					point: this.state.osc.frequency
				}, {
					name: "Volume",
					point: this.state.amp.gain
				}
			]} port={[
				{
					type: "out",
					point: this.state.osc
				}
			]} />
		);
	}
}

export default Op;
