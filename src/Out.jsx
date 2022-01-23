import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module {...this.props} activeCable={this.props.activeCable} />
		);
	}
}

export default Out;
