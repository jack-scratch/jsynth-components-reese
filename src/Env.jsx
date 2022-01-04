import Effect from "./Effect";

class Env extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createBiquadFilter()
		};

		this.state.node.type = this.props.type;
	}

	render() {
		return (
			<Effect name={this.props.name} node={[
				{
					name: "Attack",
					point: this.state.node.frequency
				}, {
					name: "Decay",
					point: this.state.node.frequency
				}, {
					name: "Sustain",
					point: this.state.node.frequency
				}, {
					name: "Release",
					point: this.state.node.frequency
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

Env.defaultProps = {
	name: "Envelope"
};

export default Env;
