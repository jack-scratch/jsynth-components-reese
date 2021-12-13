import React from 'react';

class Knob extends React.Component {
	constructor(props) {
		super(props);

		if (props.rad) {
			this._rad = props.rad;
		} else {
			switch (props.sz) {
				case 's':
					this._rad = 26;

					break;

				case 'm':
					this._rad = 40;

					break;

				case 'l':
					this._rad = 60;

					break;

				default:
					this._rad = 40;

					break;
			}
		}

		this.state = {
			param: 0
		};

		this.turn = this.turn.bind(this);
	}

	turn() {
		this.setState((prevState, props) => ({
			param: this.state.param + 1
		}));
	}

	render() {
		const
			diam = this._rad * 2,
			lineLn = 16;

		return (
			<svg className="knob raised" width={diam} height={diam} transform={"rotate(" + this.state.param + ")"} onClick={this.turn}>
				<defs>
					<clipPath id="circ">
						<circle cx={this._rad} cy={this._rad} r={this._rad} />
					</clipPath>
				</defs>
				<circle cx={this._rad} cy={this._rad} r={this._rad} fill="#333" />
				<line x1={this._rad} x2={this._rad} y1={diam - lineLn} y2={this._rad * 2} strokeWidth="3" stroke="grey" clipPath="url(#circ)" />
			</svg>
		);
	}
}

export default Knob;
