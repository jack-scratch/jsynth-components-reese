import React from "react";

import "./Light.css";

class Light extends React.Component {
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
