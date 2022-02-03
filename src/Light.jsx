import React from "react";

import "./Light.css";

class Light extends React.Component {
	render() {
		return (
			<svg className={`light ${(this.props.data ? "on" : "off")}`}>
				<circle />
			</svg>
		);
	}
}

Light.defaultProps = {
	data: false
};

export default Light;
