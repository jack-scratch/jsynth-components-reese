import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inPoint: this.props.inPoint,
			outPoint: null
		};
	}

	render() {
		return (
			<svg className="cable">
				<path d={`M ${this.props.startCurr[0]},${this.props.startCurr[1]} C ${this.props.startCurr[0]},${this.props.startCurr[1]} ${this.props.mid[0]},${this.props.mid[1]} ${this.props.endCurr[0]},${this.props.endCurr[1]}`} />
			</svg>
		);
	}
}

export default Cable;
