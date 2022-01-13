import Effect from "./Effect";

class Env extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createBiquadFilter();

		if (this.props.type) {
			this.node.main.type = this.props.type;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Attack",
					point: this.node.main.frequency
				}, {
					name: "Decay",
					point: this.node.main.frequency
				}, {
					name: "Sustain",
					point: this.node.main.frequency
				}, {
					name: "Release",
					point: this.node.main.frequency
				}
			]} />
		);
	}
}

Env.defaultProps = {
	name: "Envelope"
};

export default Env;
