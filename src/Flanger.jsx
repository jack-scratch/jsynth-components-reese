import Effect from "./Effect";

class Flanger extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createOscillator()
		};

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}

		this.state.node.start();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Delay",
					point: this.state.node.frequency,
					min: 1.0,
					max: 50.0
				}
			]} port={[
				{
					type: "in",
					point: this.state.node
				}, {
					type: "out",
					point: this.state.node
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
