import Effect from "./Effect";

class Flanger extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createOscillator(),
			hz: 0.0
		};

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}

		this.state.node.start();
	}

	componentDidMount() {
		this.setState({
			hz: this.state.node.frequency.value
		});
	}

	render() {
		return (
			<Effect name={this.props.name} min={this.props.min} max={this.props.max} param={[
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
			]} hookDown={this.props.hookDown} marked />
		);
	}
}

Flanger.defaultProps = {
	name: "Flanger"
};

export default Flanger;
