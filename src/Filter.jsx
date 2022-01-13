import Effect from "./Effect";

class Filter extends Effect {
	constructor(props) {
		super(props);

		this.node = window.ctx.createBiquadFilter();

		this.node.type = this.props.type;
	}

	render() {
		return (
			<Effect name={this.props.name} param={this.props.param} />
		);
	}
}

Filter.defaultProps = {
	name: "Frequency"
};

class Lowpass extends Filter {
	render() {
		return (
			<Filter name="Lowpass" type="lowpass" param={[
				{
					name: "Frequency",
					point: this.node.frequency
				}
			]} />
		);
	}
}

class Highpass extends Filter {
	render() {
		return (
			<Filter name="Highpass" type="highpass" param={[
				{
					name: "Frequency",
					point: this.node.frequency
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
