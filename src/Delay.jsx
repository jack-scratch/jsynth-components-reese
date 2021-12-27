import React from "react";
import Effect from "./Effect";

class Delay extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			time: 100.0,
			node: window.ctx.createDelay()
		};

		this.state.node.delayTime.value = this.state.time;
	}

	render() {
		return (
			<Effect name={this.props.name} refer={[
				{
					name: "Time",
					point: this.state.node.delayTime
				}
			]} min={this.props.min} max={this.props.max} />
		);
	}
}

Delay.defaultProps = {
	name: "Delay",
	min: 0.01,
	max: 10.0
};

export default Delay;
