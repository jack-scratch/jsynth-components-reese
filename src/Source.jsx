import Module from "./Module";

class Source extends Module {
	render() {
		return (
			<Module {...this.props} />
		);
	}
}

export default Source;
