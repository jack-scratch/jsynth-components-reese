import React from "react";

import "./Light.css";

class Light extends React.Component {
	render() {
		return (
			<div className={`light ${(this.props.data ? "on" : "off")}`}></div>
		);
	}
}

Light.defaultProps = {
	data: false
};

export default Light;
