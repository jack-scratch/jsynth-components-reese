import React from 'react';

import './Knob.css';

class Knob extends React.Component {
	constructor(props) {
		super(props);

		this.turn = this.turn.bind(this);
	}

	turn() {
		this.props.paramRef.value += 10.0;
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
			<svg className="knob raised" width={diam} height={diam} transform={"rotate(0)"} onClick={this.turn}>
				<defs>
					<clipPath id="circ">
						<circle cx={rad} cy={this._rad} r={rad} />
					</clipPath>
				</defs>
				<circle cx={rad} cy={rad} r={rad} />
				<line x1={rad} x2={rad} y1={diam - lineLn} y2={rad * 2} />
			</svg>
		);
	}
}

export default Knob;
