import Effect from "./Effect";

class Pan extends Effect {
	constructor(props) {
		super(props);

		this.node.lfo = window.ctx.createOscillator();
		this.node.lfo.type = 'sine';
		this.node.lfo.frequency.value = 3.0;

		this.node.main = window.ctx.createStereoPanner();

		this.node.lfo.connect(this.node.main.pan);

		this.node.lfo.start();
	}

	render() {
		return (
			<Effect name={this.props.name} param={[
				{
					name: "Rate",
					min: 0.1,
					max: 10.0,
					point: this.node.main.pan,
					hook: (val) => {
						this.node.lfo.frequency.value = val;
					}
				}
			]} port={[
			{
				type: "out",
				point: this.node.main
			}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} marked={this.props.makred} />
		);
	}
}

Pan.defaultProps = {
	name: "Pan"
};

export default Pan;
