import React from 'react';

class Knob extends React.Component {
	constructor(props) {
		super(props);

		this._rad = props.rad;
		this._val = props.val;
	}

	render() {
		const
			diam = this._rad * 2,
			lineLn = 16;

		return (
			<svg className="knob raised" width={diam} height={diam} transform={"rotate(" + this._val + ")"}>
				<circle cx={this._rad} cy={this._rad} r={this._rad} fill="#333" />
				<line x1={this._rad} x2={this._rad} y1={diam - lineLn} y2={this._rad * 2} strokeWidth="3" stroke="grey" />
			</svg>
		);
	}
}

export default Knob;
