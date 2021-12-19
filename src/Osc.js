import React from "react";
import ctx from "./ctx";
import Source from "./Source";

class Osc extends Source {
	constructor(props) {
		super(props);

		if (this.props.type) {
			this.state.node.type = this.props.type;
		}

		this.state = {
			node: ctx.createOscillator(),
			hz: 0.0
		};

		this.state.node.start();
	}

	componentDidMount() {
		this.setState({
			hz: this.state.node.frequency.value
		});
	}

	render() {
		return (
			<Source name={this.props.name} refer={[
				{
					name: "Frequency",
					point: this.state.node.frequency
				}
			]} port={[
				{
					name: "out",
					point: this.state.node
				}
			]} />
		);
	}
}

Osc.defaultProps = {
	name: "Oscillator"
};

export default Osc;
