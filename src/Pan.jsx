import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			time: 100.0,
			node: window.ctx.createStereoPanner()
		};

		this.state.node.pan.value = this.state.time;
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Rate",
					point: this.state.node.pan
				}
			]} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
