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
			<Source name={this.props.name} min={this.state.node.frequency.minValue} max={this.state.node.frequency.maxValue} refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} port={[
				{
					type: "out",
					point: this.state.node
				}
			]} hook={this.props.hook} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator"
};

export default Osc;
