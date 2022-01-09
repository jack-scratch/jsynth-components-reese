import Module from "./Module";

class Out extends Module {
	render() {
		return (
			<Module name={this.props.name} port={this.props.port} hookInDown={this.props.hookInDown} hookOutDown={this.props.hookOutDown} hookInUp={this.props.hookInUp} />
		);
	}
}

export default Out;
