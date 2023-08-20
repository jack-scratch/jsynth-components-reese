import Module from "./Module";
import {
	unit
} from "../fmt";

class Chorus extends Module {
	constructor(props) {
		super();

		this.node.main = window.ctx.createOscillator();
	}

	async componentDidMount() {
		await window.ctx.audioWorklet.addModule("worklet/dsp.js");

		this.node.main = await new AudioWorkletNode(window.ctx, "chorus");

		this.setState({
			spread: this.node.main.parameters.get("spread")
		});
	}

	render() {
		return (
			<Module name="Chorus" param={[
				{
					name: "Spread",
					min: 1,
					max: 100,
					unit: unit["time"][0],
					point: this.node.main.frequency,
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
	cnt: 6
};

export default Chorus;
