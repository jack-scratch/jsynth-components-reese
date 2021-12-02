import React from 'react';

class Knob extends React.Component {
	constructor(props) {
		super(props);

		this.rad = props.rad;
		this.val = props.val;
	}

	render() {
		const
			diam = this.rad * 2,
			lineLn = 16;

		return (
			<svg className="knob raised" width={diam} height={diam} transform={"rotate(" + this.val + ")"}>
				<circle cx={this.rad} cy={this.rad} r={this.rad} fill="#333" />
				<line x1={this.rad} x2={this.rad} y1={diam - lineLn} y2={this.rad * 2} strokeWidth="3" stroke="grey" />
			</svg>
		);
	}
}

export default Knob;
