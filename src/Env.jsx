import Effect from "./Effect";

class Env extends Effect {
	constructor(props) {
		super(props);

		this.node = window.ctx.createBiquadFilter();

		if (this.props.type) {
			this.node.type = this.props.type;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Attack",
					point: this.node.frequency
				}, {
					name: "Decay",
					point: this.node.frequency
				}, {
					name: "Sustain",
					point: this.node.frequency
				}, {
					name: "Release",
					point: this.node.frequency
				}
			]} />
		);
	}
}

Env.defaultProps = {
	name: "Envelope"
};

export default Env;
