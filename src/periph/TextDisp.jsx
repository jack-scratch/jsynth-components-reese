import React from "react";

import "./TextDisp.css";

class TextDisp extends React.Component {
	render() {
		return (
			<div className="buff" style={{
				width: `${this.props.wd}ch`,
				height: `${this.props.ln * 2}ch`,
				overflow: "hidden"
			}}>{this.props.buff && typeof(this.props.buff) == "object" ? this.props.buff.map((el, i) => <div className="line" key={i}>{el}</div>) : <div className="line">{this.props.buff}</div>}</div>
		);
	}
}

TextDisp.defaultProps = {
	wd: 20,
	ln: 4,
	l: 0
};

export default TextDisp;
