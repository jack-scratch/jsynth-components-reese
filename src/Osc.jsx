import React from "react";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		this.state = {
			node: window.ctx.createOscillator(),
			hz: 0.0
		};

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}

		this.state.node.start();
	}

	componentDidMount() {
		this.setState({
			hz: this.state.node.frequency.value
		});
	}

	render() {
		return (
			<Source name={this.props.name} min={this.props.min} max={this.props.max} node={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}, {
					name: "Detune",
					point: this.state.node.detune
				}
			]} port={[
				{
					type: "out",
					point: this.state.node
				}
			]} hookDown={this.props.hookDown} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator",
	min: 1.0,
	max: 1000.0
};

export default Osc;
