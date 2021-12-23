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
			<Source name={this.props.name} min={this.props.min} max={this.props.max} refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} port={[
				{
					type: "out",
					point: this.state.node
				}
			]} hookDown={this.props.hookDown} marked />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator",
	min: 1,
	max: 1000
};

export default Osc;
