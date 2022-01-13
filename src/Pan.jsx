import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

		this.node = window.ctx.createStereoPanner();

		if (this.props.time) {
			this.node.pan.value = this.props.time;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Rate",
					point: this.node.pan
				}
			]} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
