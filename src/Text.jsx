import React from "react";

import "./Text.css";

class Text extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="buff">
				{this.props.buff.map((line) =>
					<div className="line">{line}</div>
				)}
			</div>
		);
	}
}

Text.defaultProps = {
	buff: []
};

export default Text;
