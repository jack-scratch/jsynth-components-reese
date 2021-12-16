import React from "react";
import Effect from "./Effect";

class Filter extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			hz: 100.0,
			node: this.props.ctx.createBiquadFilter()
		};

		this.state.node.type = this.props.type;
		this.state.node.frequency.value = this.state.hz;
	}

	render() {
		return (
			<Effect name="Filter" param={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

export default Filter;
