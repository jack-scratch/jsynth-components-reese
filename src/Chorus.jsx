import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Chorus extends Effect {
	constructor(props) {
		super();

		this.node.main = window.ctx.createOscillator();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Spread",
					min: 1,
					max: 100,
					unit: unit["time"][0],
					hook: (val) => {
						this.node.main.frequency.value = val;
					}
				}
			]} port={[{
				type: "in",
				point: this.node.main
			}, ...[...Array(this.props.cnt).keys()].map((i) => ({
				type: "out",
				point: this.node.main
			}))]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Chorus.defaultProps = {
	name: "Chorus",
	cnt: 6
};

export default Chorus;
