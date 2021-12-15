import React from "react";
import Effect from "./Effect";

class Filter extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: this.props.ctx.createBiquadFilter()
		}

		this.state.node.type = this.props.type;
		this.state.node.frequency.value = this.props.hz;
	}

	render() {
		return (
			<Effect name="Filter" param={[
				{
					name: "Frequency"
				}
			]} paramRef={this.state.node.frequency} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Filter;
