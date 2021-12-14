import React from 'react';

import './Btn.css';

class Btn extends React.Component {
	render() {
		return (
			<div className={'btn raised ' + this.props.sz}>
				<div>
					<div className='mark'>{this.props.name}</div>
				</div>
			</div>
		);
	}
};

export default Btn;
