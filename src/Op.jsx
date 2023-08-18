import Osc from "./Osc";
import Source from "./Source";
import TextDisp from "./periph/TextDisp";
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

class Op extends Osc {
	type = [
		"sine",
		"square",
		"sawtooth",
		"triangle"
	];

	constructor(props) {
		super(props);

		this.node.amp = window.ctx.createGain();

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
				this.node.main.type = this.type[this.state.l];
			});
		}
	}

	dec() {
		if (this.state.l) {
			this.setState((prevState) => ({
				l: prevState.l - 1
			}), () => {
				this.node.main.type = this.type[this.state.l];
			});
		}
	}

	componentDidMount() {
		// patch
		this.node.main.connect(this.node.amp);

		// start
		this.node.main.start();
	}

	render() {
		return (
			<Source name={this.props.name} param={[
				{
					name: "Frequency",
					min: this.props.rng["freq"][0],
					max: this.props.rng["freq"][1],
					point: this.node.main.frequency,
					hook: (val) => {
						this.node.main.frequency.value = val;
					}
				}, {
					name: "Gain",
					min: this.props.rng["vol"][0],
					max: this.props.rng["vol"][1],
					point: this.node.amp.gain,
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
					<TextDisp buff={[
						this.type[this.state.l]
					]} wd={10} ln={1} />
				</div>
				<div className="body">
					<Btn ht={26} label={<FontAwesomeIcon icon={faSortUp} />} hookPush={this.inc} />
					<Btn ht={26} label={<FontAwesomeIcon icon={faSortDown} />} hookPush={this.dec} />
				</div>
			</Source>
		);
	}
}

Op.defaultProps = {
	name: "Operator",
	rng: {
		"freq": [
			1.0,
			1000.0
		],
		"vol": [
			-12.0,
			12.0
		]
	}
};

export default Op;
