import Effect from "./Effect";

class Flanger extends Effect {
	constructor(props) {
		super(props);

		this.node = window.ctx.createOscillator();

		if (this.props.type) {
			this.node.type = this.props.type;
		}

		this.node.start();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Delay",
					point: this.node.frequency,
					min: 1.0,
					max: 50.0
				}
			]} port={[
				{
					type: "in",
					point: this.node
				}, {
					type: "out",
					point: this.node
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
