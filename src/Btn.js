import React from 'react';

import './Btn.css';

class Btn extends React.Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
	}

	play() {
		alert('asdf')
	}

	render() {
		return (
			<div className={'btn raised ' + this.props.sz} onClick={this.play}>
				<div>
					<div className='mark'>{this.props.name}</div>
				</div>
			</div>
		);
	}
};

export default Btn;
