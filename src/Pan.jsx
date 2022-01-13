import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super();

		this.node.main = window.ctx.createStereoPanner();

		if (this.props.time) {
			this.node.main.pan.value = this.props.time;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Rate",
					point: this.node.main.pan
				}
			]} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
