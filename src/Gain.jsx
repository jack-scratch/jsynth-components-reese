import Effect from "./Effect";

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
					point: this.node.main.gain,
					min: -12.0,
					max: 12.0,
					unit: "db"
				}
			]} />
		);
	}
}

export default Gain;
