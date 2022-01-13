import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.osc = window.ctx.createOscillator();
		this.amp = window.ctx.createGain();

		this.osc.type = this.props.type;
	}

	componentDidMount() {
		// route
		this.osc.connect(this.amp);

		// start
		this.osc.start();
	}

	render() {
		return (
			<Source name="Operator" param={[
				{
					name: "Frequency",
					point: this.osc.frequency
				}, {
					name: "Volume",
					point: this.amp.gain
				}
			]} port={[
				{
					type: "out",
					point: this.osc
				}
			]} />
		);
	}
}

export default Op;
