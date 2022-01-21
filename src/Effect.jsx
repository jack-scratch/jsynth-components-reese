import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={this.props.port} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

export default Effect;
