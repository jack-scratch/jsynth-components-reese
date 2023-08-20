import Effect from "./Effect";

class Flanger extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createOscillator();
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
					point: this.node.main.frequency,
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
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
