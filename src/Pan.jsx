import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

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
					hook: (val) => {
						this.node.main.pan.value = val;
					}
				}
			]} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
