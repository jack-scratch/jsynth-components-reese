import Effect from "./Effect";

class Env extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createBiquadFilter()
		};

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
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
			]} />
		);
	}
}

Env.defaultProps = {
	name: "Envelope"
};

export default Env;
