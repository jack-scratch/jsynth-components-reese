import Module from "./Module";

class Source extends Module {
	componentDidMount() {
		for (let src in this.node) {
			this.node[src].start();
		}
	}

	render() {
		return (
			<Module {...this.props} c={this.props.c} />
		);
	}
}

export default Source;
