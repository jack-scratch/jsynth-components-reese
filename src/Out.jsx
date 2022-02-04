import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module {...this.props} />
		);
	}
}

export default Out;
