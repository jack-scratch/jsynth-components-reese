import Effect from "./Effect";

class Flanger extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createOscillator();

		if (this.props.type) {
			this.node.main.type = this.props.type;
		}
	}

	componentDidMount() {
		this.node.main.start();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Delay",
					min: 1.0,
					max: 50.0,
					hook: (val) => {
						this.node.main.frequency = val;
					}
				}
			]} port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} c={this.props.c} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
