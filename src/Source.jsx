import Module from "./Module";

class Source extends Module {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		for (let src in this.node) {
			this.node[src].start();
		}
	}

	render() {
		return (
			<Module {...this.props} activeCable={this.props.activeCable} />
		);
	}
}

export default Source;
