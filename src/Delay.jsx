import Effect from "./Effect";

class Delay extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			time: 100.0,
			node: window.ctx.createDelay()
		};

		this.state.node.delayTime.value = this.state.time;
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
