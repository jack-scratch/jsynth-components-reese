import React from 'react';

import './Btn.css';

class Btn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			down: false
		};

		this.play = this.play.bind(this);
	}

	play() {
		this.setState((prevState, props) => ({
			down: !prevState.down
		}));
	}

	render() {
		return (
			<div className={'btn ' + (this.state.down ? ' ' : 'raised ') + this.props.sz} onMouseDown={this.play}>
				<div>
					<div className='mark'>{this.props.name}</div>
				</div>
			</div>
		);
	}
};

export default Btn;
