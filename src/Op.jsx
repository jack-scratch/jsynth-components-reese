import Source from "./Source";
import Text from "./Text";

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
			<div className="module">
				<div>
					<Text buff={[
						"asdf"
					]} wd={10} ht={1} />
				</div>
				<Source name={this.props.name} param={[
					{
						name: "Frequency",
						point: this.node.osc.frequency,
						min: this.props.rngFreq[0],
						max: this.props.rngFreq[1]
					}, {
						name: "Gain",
						point: this.node.amp.gain,
						min: this.props.rngVol[0],
						max: this.props.rngVol[1]
					}
				]} port={[
					{
						type: "out",
						point: this.node.amp
					}
				]} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} />
			</div>
		);
	}
}

Op.defaultProps = {
	name: "Operator",
	rngFreq: [
		1.0,
		1000.0
	],
	rngVol: [
		-12.0,
		12.0
	]
};

export default Op;
