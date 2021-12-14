import React from 'react';

import './Btn.css';

class Btn extends React.Component {
	render() {
		return (
			<div className={"btn raised " + this.props.sz}></div>
		);
	}
};

export default Btn;
