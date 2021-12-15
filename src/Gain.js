import React from "react";
import Effect from "./Effect";

class Gain extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			amp: this.props.ctx.createGain()
		};

		this.state.amp.gain.value = this.props.level;
	}

	render() {
		return (
			<Effect name="Gain" param={[
				{
					name: "Level"
				}
			]} paramRef={this.state.amp.gain} min={this.props.min} max={this.props.max} />
		);
	}
};

export default Gain;
