import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Chorus extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createOscillator();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Spread",
					point: this.node.main.frequency,
					min: 1,
					max: 100,
					unit: unit["time"][0]
				}
			]} port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Chorus.defaultProps = {
	name: "Chorus"
};

export default Chorus;
