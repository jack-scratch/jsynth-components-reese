import Source from "./Source";

class Chorus extends Source {
	constructor(props) {
		super(props);

		this.node = window.ctx.createOscillator();

		if (this.props.type) {
			this.node.type = this.props.type;
		}
	}

	componentDidMount() {
		// start
		this.node.start();
	}

	render() {
		return (
			<Source name={this.props.name} param={[
				{
					name: "Spread",
					point: this.node.frequency,
					min: 1.0,
					max: 100.0
				}
			]} port={[
				{
					type: "out",
					point: this.node
				}, {
					type: "out",
					point: this.node
				}, {
					type: "out",
					point: this.node
				}, {
					type: "out",
					point: this.node
				}, {
					type: "out",
					point: this.node
				}, {
					type: "out",
					point: this.node
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Chorus.defaultProps = {
	name: "Chorus"
};

export default Chorus;
