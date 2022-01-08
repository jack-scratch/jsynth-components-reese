import Module from "./Module";

class Source extends Module {
	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={this.props.port} min={this.props.min} max={this.props.max} hookOutDown={this.props.hookOutDown} hookInUp={this.props.hookInUp} marked={this.props.marked} />
		);
	}
}

export default Source;
