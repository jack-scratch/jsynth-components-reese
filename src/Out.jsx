import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module {...this.props} c={this.props.c} />
		);
	}
}

export default Out;
