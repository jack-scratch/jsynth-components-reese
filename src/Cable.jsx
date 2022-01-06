import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mid: [
				0,
				0
			],
			inPoint: this.props.inPoint,
			outPoint: null,
			active: false
		};

		this.release = this.release.bind(this);
	}

	midX() {
		let first;
		let snd;
		if (this.props.end[0] > this.props.start[0]) {
			first = this.props.start[0];
			snd = this.props.end[0];
		} else {
			first = this.props.end[0];
			snd = this.props.start[0];
		}

		let delta = snd - first;

		return first + (delta / 2);
	}

	componentDidMount() {
		this.setState({
			mid: [
				this.midX(),
				(this.props.end[1] > this.props.start[1] ? this.props.end[1] : this.props.start[1]) * 1.6
			],
			active: true
		});
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
				<path d={`M ${this.props.start[0]},${this.props.start[1]} C ${this.props.start[0]},${this.props.start[1]} ${this.state.mid[0]},${this.state.mid[1]} ${this.props.end[0]},${this.props.end[1]}`} />
			</svg>
		);
	}
}

export default Cable;
