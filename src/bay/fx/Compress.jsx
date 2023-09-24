import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Compress extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createDynamicsCompressor();
	}

	render() {
		return (
			<Effect name="Compressor" port={[
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

export default Compress;
