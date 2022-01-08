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
			]} />
		);
	}
}

export default Effect;
