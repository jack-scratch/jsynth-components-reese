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
					<div className="line">{i < this.props.buff.length ? this.props.buff[i] : ""}</div>
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
