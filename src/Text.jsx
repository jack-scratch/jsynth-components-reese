import React from "react";

import "./Text.css";

class Text extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buff" style={{
				width: this.props.wd + "ch",
				height: this.props.ht + "ch"
			}}>
				{this.props.buff.map((line) =>
					<div className="line">{line}</div>
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
