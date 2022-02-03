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
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} c={this.props.c} marked={this.props.makred} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
