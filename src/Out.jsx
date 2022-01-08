import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} port={this.props.port} hookOutDown={this.props.hookOutDown} hookInUp={this.props.hookInUp} hookEnter={this.props.hookEnter} />
		);
	}
}

export default Out;
