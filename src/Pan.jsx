import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createStereoPanner()
		};

		if (this.props.time) {
			this.state.node.pan.value = this.props.time;
		}
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
