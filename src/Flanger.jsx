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
		// start
		this.node.main.start();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Delay",
					point: this.node.main.frequency,
					min: 1.0,
					max: 50.0
				}
			]} port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
