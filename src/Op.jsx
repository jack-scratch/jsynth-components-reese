import Source from "./Source";
import Text from "./Text";
import {
	Btn
} from "./Btn";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
	faSortUp,
	faSortDown
} from "@fortawesome/free-solid-svg-icons";

class Op extends Source {
	type = [
		"sine",
		"square",
		"sawtooth",
		"triangle"
	];

	constructor(props) {
		super(props);

		this.node.osc = window.ctx.createOscillator();
		this.node.amp = window.ctx.createGain();

		if (this.props.type) {
			this.node.osc.type = this.props.type;
		}

		this.state = {
			l: 0
		};

		this.inc = this.inc.bind(this);
		this.dec = this.dec.bind(this);
	}

	inc() {
		if (this.state.l < this.type.length - 1) {
			this.setState((prevState) => ({
				l: prevState.l + 1
			}), () => {
				this.node.osc.type = this.type[this.state.l];
			});
		}
	}

	dec() {
		if (this.state.l) {
			this.setState((prevState) => ({
				l: prevState.l - 1
			}), () => {
				this.node.osc.type = this.type[this.state.l];
			});
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
			<Source name={this.props.name} param={[
				{
					name: "Frequency",
					min: this.props.rngFreq[0],
					max: this.props.rngFreq[1],
					hook: (val) => {
						this.node.osc.frequency.value = val;
					}
				}, {
					name: "Gain",
					min: this.props.rngVol[0],
					max: this.props.rngVol[1],
					hook: (val) => {
						this.node.amp.gain.value = val;
					}
				}
			]} port={[
				{
					type: "out",
					point: this.node.amp
				}
			]} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown}>
				<div className="head">
					<Text buff={[
						this.type[this.state.l]
						]} wd={10} ht={1} />
				</div>
				<div className="body">
					<Btn ht={26} name={<FontAwesomeIcon icon={faSortUp} />} hookDown={this.inc} />
					<Btn ht={26} name={<FontAwesomeIcon icon={faSortDown} />} hookDown={this.dec} />
				</div>
			</Source>
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
