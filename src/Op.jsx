import Source from "./Source";

class Op extends Source {
	constructor(props) {
		super(props);

		this.node.osc = window.ctx.createOscillator();
		this.node.amp = window.ctx.createGain();

		if (this.props.type) {
			this.node.osc.type = this.props.type;
		}
	}

	componentDidMount() {
		// route
		this.node.osc.connect(this.node.amp);

		// start
		this.node.osc.start();
	}

	render() {
		return (
			<Source name="Operator" param={[
				{
					name: "Frequency",
					point: this.node.osc.frequency
				}, {
					name: "Volume",
					point: this.node.amp.gain
				}
			]} port={[
				{
					type: "out",
					point: this.node.amp
				}
			]} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} />
		);
	}
}

export default Op;
