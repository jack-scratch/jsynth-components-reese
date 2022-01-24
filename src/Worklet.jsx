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

		this.node = new AudioWorkletNode(window.ctx, this.props.workName);

		for (let key of this.node.parameters.keys()) {
			this.state.param[key] = null;
		}

		let i = 0;
		for (let val of this.node.parameters.values()) {
			let key = Object.keys(this.state.param)[i];

			this.state.param[key] = {
				min: val.minValue,
				max: val.maxValue
			};

			i++;
		}

		this.setState({
		});

		// route
		this.node.connect(window.ctx.destination);
	}

	render() {
		return (
			<Module name={this.props.workName} param={Object.keys(this.state.param).map((key) => (
				{
					name: key,
					point: this.node,
					min: this.state.param[key].min,
					max: this.state.param[key].max
				}
			))} port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} />
		);
	}
}

export default Worklet;
