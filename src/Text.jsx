import React from "react";

import "./Text.css";

class Text extends React.Component {
	render() {
		return (
			<div className="buff" style={{
				width: this.props.wd + "ch",
				height: this.props.ht + "ch"
			}}>
				{[...Array(this.props.ht).keys()].map((i) =>
					<div className="line" key={i}>{this.state.l + i < this.props.buff.length ? this.props.buff[this.state.l + i] : ""}</div>
				)}
			</div>
		);
	}
}

Text.defaultProps = {
	buff: [],
	wd: 20,
	ht: 4
};

export default Text;
