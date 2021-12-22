import React from "react";

import "./Cable.css";

class Cable extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			start: this.props.start,

			in: null,
			out: null,

			end: this.props.end,
			mid: [
				0,
				0
			],
			active: false
		};

		this.release = this.release.bind(this);
		this.drag = this.drag.bind(this);
	}

	componentDidMount() {
		this.setState({
			mid: [
				Math.abs(this.state.end[0] - this.state.start[0]) / 2,
				(this.state.end[1] > this.state.start[1] ? this.state.end[1] : this.state.start[1]) * 1.6
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

	drag(e) {
		if (this.state.active) {
			this.setState({
				end: [
					e.nativeEvent.offsetX,
					e.nativeEvent.offsetY
				]
			}, () => {
				this.setState({
					mid: [
						Math.abs(this.state.end[0] - this.state.start[0]) / 2,
						(this.state.end[1] > this.state.start[1] ? this.state.end[1] : this.state.start[1]) * 1.6
					]
				});
			});
		}
	}

	render() {
		return (
			<svg className="cable" onMouseUp={this.release} onMouseMove={this.drag}>
				<path d={`M ${this.state.start[0]},${this.state.start[1]} C ${this.state.start[0]},${this.state.start[1]} ${this.state.mid[0]},${this.state.mid[1]} ${this.state.end[0]},${this.state.end[1]}`} />
			</svg>
		);
	}
}

export default Cable;
