import Effect from "./Effect";

class ChanMerge extends Effect {
	constructor() {
		super();

		this.node.main = window.ctx.createChannelMerger();
	}

	render() {
		return (
			<Effect name="Channel Merger" port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} c={this.props.c} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

export default ChanMerge;
