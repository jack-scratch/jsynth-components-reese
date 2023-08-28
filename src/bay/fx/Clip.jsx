import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Clip extends Effect {
	render() {
		return (
			<Effect name="Clipper" param={[
				{
					name: "Threshold",
					min: this.props.rng["gain"][0],
					max: this.props.rng["gain"][1],
					unit: unit["freq"],
					point: this.node.main.gain,
					hook: (val) => {
						this.node.main.gain.value = val;
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
			]} c={this.props.c} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

Clip.defaultProps = {
	rng: {
		"gain": [
			-12.0,
			12.0
		]
	}
};

export default Clip;
