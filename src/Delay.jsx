import Effect from "./Effect";

class Delay extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createDelay()
		};

		if (this.props.time) {
			this.state.node.delayTime.value = this.props.time;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Time",
					point: this.state.node.delayTime,
					min: 0.01,
					max: 10.0
				}
			]} />
		);
	}
}

Delay.defaultProps = {
	name: "Delay"
};

export default Delay;
