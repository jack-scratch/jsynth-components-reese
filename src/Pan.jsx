import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createStereoPanner();

		if (this.props.rate) {
			this.node.main.pan.value = this.props.rate;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Rate",
					point: this.node.main.pan,
					hook: (val) => {
						this.node.main.pan.value = val;
					}
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.makred} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
