import Module from "./Module";

class Worklet extends Module {
	constructor(props) {
		super(props);

		this.state = {
			param: {}
		};
	}

	async componentDidMount() {
		await window.ctx.audioWorklet.addModule(`worklet/${this.props.fName}.js`);

		this.node.worklet = new AudioWorkletNode(window.ctx, this.props.name);

		for (let key of this.node.worklet.parameters.keys()) {
			this.state.param[key] = null;
		}

		let i = 0;
		for (let val of this.node.worklet.parameters.values()) {
			let key = Object.keys(this.state.param)[i];

			this.state.param[key] = {
				min: val.minValue,
				max: val.maxValue
			};

			i++;
		}

		this.setState({
		});
	}

	render() {
		return (
			<Module name={this.props.name} param={Object.keys(this.state.param).map((key) => (
				{
					name: key,
					point: this.node.worklet.parameters.get(key),
					min: this.state.param[key].min,
					max: this.state.param[key].max
				}
			))} port={[
				{
					type: "in",
					point: this.node.worklet
				}, {
					type: "out",
					point: this.node.worklet
				}
			]} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} c={this.props.c} marked={this.props.marked} />
		);
	}
}

export default Worklet;
