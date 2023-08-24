import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Unison extends Effect {
	render() {
		return (
			<Effect name="Unison" param={[
				{
					name: "Copies",
					min: 1,
					max: 8,
					point: this.node.main.cp,
					hook: (val) => {
						this.node.main.cp.value = val;
					}
				}, {
					name: "Spread",
					min: this.props.rng["gain"][0],
					max: this.props.rng["gain"][1],
					unit: unit["freq"],
					point: this.node.main.cp,
					hook: (val) => {
						this.node.main.cp.value = val;
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

Unison.defaultProps = {
	rng: {
		"spread": [
			-12.0,
			12.0
		]
	}
};

export default Unison;
