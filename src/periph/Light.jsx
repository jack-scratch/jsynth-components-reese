import React from "react";
import {
	bg,
	js
} from "../col";
import {
	clamp
} from "../util";

import "./Light.css";

class Light extends React.Component {
	render() {
		return (
			<svg className="light">
				<circle fill={bg} />
				<circle fill={js} opacity={clamp(this.props.data, 0.0, 1.0)} />
			</svg>
		);
	}
}

Light.defaultProps = {
	data: 0.0
};

export default Light;
