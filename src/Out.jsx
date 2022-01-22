import Module from "./Module";

class Out extends Module {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Module {...this.props} activeCable={this.props.activeCable} />
		);
	}
}

export default Out;
