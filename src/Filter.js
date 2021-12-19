import React from "react";
import Effect from "./Effect";

class Filter extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			hz: 100.0,
			node: ctx.createBiquadFilter()
		};

		this.state.node.type = this.props.type;
		this.state.node.frequency.value = this.state.hz;
	}

	render() {
		return (
			<Effect name={this.props.name} refer={this.props.refer} min={this.props.min} max={this.props.max} />
		);
	}
}

Filter.defaultProps = {
	name: "Frequency"
};

export default Filter;
