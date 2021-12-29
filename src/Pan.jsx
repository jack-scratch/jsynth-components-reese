import React from "react";
import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			time: 100.0,
			node: window.ctx.createStereoPanner()
		};

		this.state.node.pan.value = this.state.time;
	}

	render() {
		return (
			<Effect name={this.props.name} node={[
				{
					name: "Rate",
					point: this.state.node.pan
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
