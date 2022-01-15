import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={[
				{
					type: "in",
					point: this.props.point
				}, {
					type: "out",
					point: this.props.point
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} />
		);
	}
}

export default Effect;
