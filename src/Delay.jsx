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
					min: 0.01,
					max: 10.0,
					hook: (val) => {
						this.node.worklet.time.value = val;
					}
				}
			]} />
		);
	}
}

Delay.defaultProps = {
	name: "Delay"
};

export default Delay;
