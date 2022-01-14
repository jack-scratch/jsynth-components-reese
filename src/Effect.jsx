import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} param={this.props.param} port={[
				{
					type: "in",
					point: this.props.param
				}, {
					type: "out",
					point: this.props.param
				}
			]} hookOutDown={this.props.hookOutDown} hookInUp={this.props.hookInUp} />
		);
	}
}

export default Effect;
