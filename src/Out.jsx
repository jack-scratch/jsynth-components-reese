import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} port={this.props.port} hookOut={this.props.hookOut} hookIn={this.props.hookIn} hookEnter={this.props.hookEnter} />
		);
	}
}

export default Out;
