import React from "react";
import Effect from "./Effect";

class Filter extends Effect {
	constructor(props) {
		super(props);

		this.state = {
			hz: 100.0,
			node: window.ctx.createBiquadFilter()
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

class Lowpass extends Filter {
	render() {
		return (
			<Filter name="Lowpass" type="lowpass" refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} />
		);
	}
}

class Highpass extends Filter {
	render() {
		return (
			<Filter name="Highpass" type="highpass" refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} />
		);
	}
}

export {
	Filter,
	Lowpass,
	Highpass
};
