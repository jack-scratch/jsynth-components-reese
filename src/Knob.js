import React from 'react';

class Knob extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			paramRef: 0.0
		};

		this.turn = this.turn.bind(this);
	}

	turn() {
		this.setState((prevState, props) => ({
			paramRef: this.state.paramRef + 10.0
		}));
	}

	render() {
		let rad;
		switch (this.props.sz) {
			default:
			case 's':
				rad = 26;

				break;

			case 'm':
				rad = 40;

				break;

			case 'l':
				rad = 60;

				break;
		}

		const diam = rad * 2;
		const lineLn = 16;

		return (
			<svg className="knob raised" width={diam} height={diam} transform={"rotate(" + this.state.paramRef + ")"} onClick={this.turn}>
				<defs>
					<clipPath id="circ">
						<circle cx={rad} cy={this._rad} r={rad} />
					</clipPath>
				</defs>
				<circle cx={rad} cy={rad} r={rad} fill="#333" />
				<line x1={rad} x2={rad} y1={diam - lineLn} y2={rad * 2} strokeWidth="3" stroke="grey" />
			</svg>
		);
	}
}

export default Knob;
