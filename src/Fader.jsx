import React from "react";
import {
	margin
} from "./layout";

import "./Fader.css";

class Fader extends React.Component {
	constructor(props) {
		super();

		this.state = {
			down: false
		};

		this.scrub = this.scrub.bind(this);
	}

	scrub(e) {
		if (this.state.down) {
			if (this.props.scrub) {
				this.props.scrub();
			}

			this.setState({
				val: e.nativeEvent.offsetY
			});
		}
	}

	render() {
		let markStride;
		if (this.props.marked) {
			markStride = this.props.ln / (this.props.marked - 1);
		}

		return (
			<div className="fader" style={{
				height: this.props.ln
			}} onMouseDown={() => this.setState({
				down: true
			})} onMouseUp={() => this.setState({
				down: false
			})} onMouseLeave={() => this.setState({
				down: false
			})} onMouseMove={this.scrub}>
				<div className="groove">
					<div className="thumb" style={{
						marginTop: this.props.param.value
					}}>
						<div className="mark"></div>
					</div>
				</div>
				<svg xmlns="http://www.w3.org/2000/svg" className="inc">
					{this.props.marked && [...Array(this.props.mark).keys()].map((i) =>
						<line x1={margin * 2} y1={i * markStride} x2={(margin * 2) + 20} y2={i * markStride} className="tick" key={i} />
					)}
				</svg>
			</div>
		);
	}
}

Fader.defaultProps = {
	ln: 100
};

export default Fader;
