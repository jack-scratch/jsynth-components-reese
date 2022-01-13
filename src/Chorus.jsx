import Source from "./Source";

class Chorus extends Source {
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
			<Source name={this.props.name} param={[
				{
					name: "Spread",
					point: this.node.main.frequency,
					min: 1.0,
					max: 100.0
				}
			]} port={[
				{
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} hookOutDown={this.props.hookOutDown} marked />
		);
	}
}

Chorus.defaultProps = {
	name: "Chorus"
};

export default Chorus;
