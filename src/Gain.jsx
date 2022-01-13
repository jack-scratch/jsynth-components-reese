import Effect from "./Effect";

class Gain extends Effect {
	constructor(props) {
		super(props);

		this.node = window.ctx.createGain();

		if (this.props.level) {
			this.node.gain.value = this.props.level;
		}
	}

	render() {
		return (
			<Effect name="Gain" param={[
				{
					name: "Level",
					point: this.node.gain,
					min: -12.0,
					max: 12.0
				}
			]} />
		);
	}
}

export default Gain;
