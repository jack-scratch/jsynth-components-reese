import React from 'react';

import './Knob.css';

class Knob extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			val: this.props.paramRef.value
		};

		this.turn = this.turn.bind(this);
	}

	turn() {
		this.setState((prevState, props) => ({
			val: prevState.val + 10.0
		}));

		this.props.paramRef.value = this.state.val;
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
			<div>
				<svg className='knob' width={diam} height={diam} transform={`rotate(${this.state.val})`}>
					<circle className='raised' cx={rad} cy={rad} r={rad} onClick={this.turn} />
					<line x1={rad} x2={rad} y1={diam - lineLn} y2={rad * 2} />
					<text className="mark" y={rad}>{this.props.min}</text>
					<text className="mark" x={diam} y={rad}>{this.props.max}</text>
				</svg>
			</div>
		);
	}
}

export default Knob;
