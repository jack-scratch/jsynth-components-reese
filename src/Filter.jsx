import Effect from "./Effect";
import {
	unit
} from "./fmt";

class Filter extends Effect {
	constructor(props) {
		super(props);

		this.node.main = window.ctx.createBiquadFilter();

		if (this.props.type) {
			this.node.main.type = this.props.type;
		}
	}

	render() {
		return (
			<Effect name={this.props.name} param={this.props.param} point={this.node.main} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
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
					min: this.props.rngFreq[0],
					max: this.props.rngFreq[1],
					unit: unit["freq"],
					hook: (val) => {
						this.node.main.frequency.value = val;
					}
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

class Highpass extends Filter {
	render() {
		return (
			<Filter name="Highpass" type="highpass" param={[
				{
					name: "Frequency",
					min: this.props.rngFreq[0],
					max: this.props.rngFreq[1],
					unit: unit["freq"],
					hook: (val) => {
						this.node.main.frequency.value = val;
					}
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.marked} />
		);
	}
}

export {
	Filter,
	Lowpass,
	Highpass
};
