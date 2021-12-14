import React from 'react';

import './Btn.css';

class Btn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			down: false
		};

		this.play = this.play.bind(this);
		this.release = this.release.bind(this);
	}

	play() {
		this.setState(() => ({
			down: true
		}));
	}

	release() {
		this.setState(() => ({
			down: false
		}));
	}

	render() {
		return (
			<div className={'btn ' + (this.state.down ? ' ' : 'raised ') + this.props.sz} onMouseDown={this.play} onMouseUp={this.release} onMouseLeave={this.release}>
				<div>
					<div className='mark'>{this.props.name}</div>
				</div>
			</div>
		);
	}
};

export default Btn;
