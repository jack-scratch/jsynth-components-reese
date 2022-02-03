import React from "react";

import "./Text.css";

class Text extends React.Component {
	render() {
		return (
			<div className="buff" style={{
				width: `${this.props.wd}ch`,
				height: `${this.props.ln}ch`
			}}>{this.props.buff.map((el, i) => <div className="line" key={i}>{el}</div>)}</div>
		);
	}
}

Text.defaultProps = {
	wd: 20,
	ln: 4,
	l: 0
};

export default Text;
