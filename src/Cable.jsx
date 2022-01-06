import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			inPoint: this.props.inPoint,
			outPoint: null,
			active: false
		};

		this.release = this.release.bind(this);
	}

	release() {
		this.setState({
			active: false
		});

		this.props.hookUp();
	}

	render() {
		return (
			<svg className="cable" onMouseUp={this.release}>
				<path d={`M ${this.props.start[0]},${this.props.start[1]} C ${this.props.start[0]},${this.props.start[1]} ${this.props.mid[0]},${this.props.mid[1]} ${this.props.end[0]},${this.props.end[1]}`} />
			</svg>
		);
	}
}

export default Cable;
