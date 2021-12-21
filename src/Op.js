import React from "react";
import Source from "./Source";
import ctx from "./ctx";

class Op extends Source {
	constructor(props) {
		super(props);

		this.state = {
			osc: ctx.createOscillator(),
			amp: ctx.createGain(),
			hz: 0,
			level: 0
		};

		this.state.osc.type = this.props.type;

		this.state.osc.start();

		this.state.osc.connect(this.state.amp);
	}

	componentDidMount() {
		this.setState({
			hz: this.state.osc.frequency.value,
			level: this.state.amp.gain.value
		});
	}

	render() {
		return (
			<Source name="Operator" refer={[
				{
					name: "Frequency",
					point: this.state.osc.frequency
				}, {
					name: "Volume",
					point: this.state.amp.gain
				}
			]} port={[
				{
					type: "out",
					point: this.state.osc
				}
			]} />
		);
	}
}

export default Op;
