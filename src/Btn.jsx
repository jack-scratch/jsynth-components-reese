import React from "react";

import "./Btn.css";

class Btn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			buff: null,
			data: null,
			src: null,
			down: null
		};

		this.push = this.push.bind(this);
		this.release = this.release.bind(this);
	}

	push() {
		this.setState({
			down: true
		});
	}

	release() {
		if (this.state.src) {
			this.state.src.stop();

			this.setState({
				src: null
			})
		}

		this.setState({
			down: false
		});
	}

	render() {
		return (
			<div className={"btn " + (this.state.down ? " " : "raised ")} onMouseDown={this.push} onMouseUp={this.release} onMouseLeave={this.release} style={{
				width: this.props.wd,
				height: this.props.ht
			}}>
				<div>
					<div className="mark">{this.props.name}</div>
				</div>
			</div>
		);
	}
}

Btn.defaultProps = {
	wd: 50,
	ht: 50
};

export default Btn;
