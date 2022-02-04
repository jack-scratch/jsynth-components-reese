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
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

Delay.defaultProps = {
	name: "Delay"
};

export default Delay;
