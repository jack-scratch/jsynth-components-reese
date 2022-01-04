import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} port={this.props.port} hookDown={this.props.hookDown} hookUp={this.props.hookUp} hookEnter={this.props.hookhookEnter} />
		);
	}
}

export default Out;
