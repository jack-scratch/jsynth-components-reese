import Effect from "./Effect";

class ChanSplit extends Effect {
	constructor() {
		super();

		this.node.main = window.ctx.createChannelSplitter();
	}

	render() {
		return (
			<Effect name="Channel Splitter" port={[
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

export default ChanSplit;
