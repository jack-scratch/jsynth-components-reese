import Effect from "./Effect";

class Gain extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createGain()
		};

		this.state.node.gain.value = this.props.level;
	}

	render() {
		return (
			<Effect name="Gain" param={[
				{
					name: "Level",
					point: this.state.node.gain,
					min: -12.0,
					max: 12.0
				}
			]} />
		);
	}
}

Gain.defaultProps = {
	level: 0
};

export default Gain;
