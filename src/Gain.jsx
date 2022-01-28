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
					min: -12.0,
					max: 12.0,
					unit: unit["freq"],
					hook: (val) => {
						this.node.main.gain = val;
					}
				}
			]} point={this.node.main} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

export default Gain;
