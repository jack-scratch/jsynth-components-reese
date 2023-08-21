import Effect from "./Effect";

class Phaser extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createOscillator();

		this.node.filter = window.ctx.createBiquadFilter();
		this.node.filter.type = "lowpass";
	}

	componentDidMount() {
		this.node.main.start();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Frequency",
					min: 1.0,
					max: 2000.0,
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

Phaser.defaultProps = {
	name: "Phaser"
};

export default Phaser;
