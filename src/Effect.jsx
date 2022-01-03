import Module from "./Module";

class Effect extends Module {
	render() {
		return (
			<Module name={this.props.name} node={this.props.node} port={[
				{
					type: "in",
					point: this.props.node
				}, {
					type: "out",
					point: this.props.node
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

export default Effect;
