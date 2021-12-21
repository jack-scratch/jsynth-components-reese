import React from "react";
import Effect from "./Effect";
import ctx from "./ctx";

class Gain extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			node: ctx.createGain()
		};

		this.state.node.gain.value = this.props.level;
	}

	render() {
		return (
			<Effect name="Gain" refer={[
				{
					name: "Level",
					point: this.state.node.gain
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

Gain.defaultProps = {
	level: 0
};

export default Gain;
