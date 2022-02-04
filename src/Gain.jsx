import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Gain extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createGain();

		if (this.props.level) {
			this.node.main.gain.value = this.props.level;
		}
	}

	render() {
		return (
			<Effect name="Gain" param={[
				{
					name: "Level",
					min: this.props.rng["gain"][0],
					max: this.props.rng["gain"][1],
					unit: unit["freq"],
					point: this.node.main.gain,
					hook: (val) => {
						this.node.main.gain.value = val;
					}
				}
				]} point={this.node.main} port={[
					{
						type: "in",
						point: this.node.main
					}, {
						type: "out",
						point: this.node.main
					}
				]} c={this.props.c} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

Gain.defaultProps = {
	rng: {
		"gain": [
			-12.0,
			12.0
		]
	}
};

export default Gain;
