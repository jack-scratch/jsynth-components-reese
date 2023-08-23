import Effect from "./Effect";

class Phaser extends Effect {
	constructor(props) {
		super(props);

		this.node.filter = window.ctx.createBiquadFilter();
		this.node.filter.type = "lowpass";
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Frequency",
					min: 1.0,
					max: 2000.0,
					point: this.node.filter.frequency,
					hook: (val) => {
						this.node.filter.frequency = val;
					}
				}
			]} port={[
				{
					type: "in",
					point: this.node.filter
				}, {
					type: "out",
					point: this.node.filter
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Phaser.defaultProps = {
	name: "Phaser"
};

export default Phaser;
