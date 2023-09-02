import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Flanger extends Effect {
	constructor(props) {
		super(props);

		this.lfo = window.ctx.createOscillator();
		this.lfo.type = "sine";
		this.lfo.frequency.value = 1.0;
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Delay",
					min: 1.0,
					max: 50.0,
					unit: unit["time"][0],
					point: this.node.main.frequency,
					hook: (val) => {
						this.node.main.frequency = val;
					}
				}
			]} port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
