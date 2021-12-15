import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	render() {
		return (
			<svg className="cable" onClick={this.drag}>
				<path d={'M ' + 0 + ' ' + 0 + ' C ' + 50 + ' ' + 50 + ', ' + 100 + ' ' + 150 + ', ' + 150 + ' ' + 30} />
			</svg>
		);
	}
};

export default Cable;
