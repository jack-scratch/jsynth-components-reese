import Source from "./Source";

class Chorus extends Source {
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
			<Source name={this.props.name} param={[
				{
					name: "Spread",
					point: this.state.node.frequency,
					min: 1.0,
					max: 100.0
				}
			]} port={[
				{
					type: "out",
					point: this.state.node
				}, {
					type: "out",
					point: this.state.node
				}, {
					type: "out",
					point: this.state.node
				}, {
					type: "out",
					point: this.state.node
				}, {
					type: "out",
					point: this.state.node
				}, {
					type: "out",
					point: this.state.node
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Chorus.defaultProps = {
	name: "Chorus"
};

export default Chorus;
