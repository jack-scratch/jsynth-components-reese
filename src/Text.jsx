import React from "react";

import "./Text.css";

class Text extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			l: 0
		};
	}

	render() {
		return (
			<div className="buff" style={{
				width: `${this.props.wd}ch`,
				height: `${this.props.ht}ch`
			}}>{this.props.buff.map((el, i) => <div className="line" key={i}>{el}</div>)}</div>
		);
	}
}

Text.defaultProps = {
	wd: 20,
	ht: 4,
	l: 0
};

export default Text;
