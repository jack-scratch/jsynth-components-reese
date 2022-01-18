import Effect from "./Effect";

class Delay extends Effect {
	constructor(props) {
		super(props);

		this.node.worklet = window.ctx.createDelay();

		if (this.props.time) {
			this.node.worklet.time.value = this.props.time;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Time",
					point: this.node.worklet.time,
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
