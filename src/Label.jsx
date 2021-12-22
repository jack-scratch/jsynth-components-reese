import React from "react";

class Label extends React.Component {
	render() {
		return (
			<div className="label">{this.props.text}</div>
		);
	}
}

export default Label;
