import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} hookOutDown={this.props.hookOutDown} hookInUp={this.props.hookInUp} />
		);
	}
}

export default Effect;
