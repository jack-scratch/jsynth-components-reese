import React from "react";

import "./Light.css";

class Light extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			on: this.props.on
		};
	}

	render() {
		return (
			<div className={`light ${(this.props.on ? "on" : "off")}`}></div>
		);
	}
}

Light.defaultProps = {
	on: false
};

export default Light;
