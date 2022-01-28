import React from "react";
import {
	margin,
	bevel
} from "./layout";
import {
	bg,
	fg
} from "./col";

import "./Fader.css";

class Fader extends React.Component {
	constructor(props) {
		super();

		this.wd = 30;
		this.ht = 60;

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
			}}>
				<div className="groove">
					<svg className="thumb" width={this.wd} height={this.ht} onMouseDown={() => this.setState({
						down: true
					})} onMouseUp={() => this.setState({
						down: false
					})} onMouseLeave={() => this.setState({
						down: false
					})} onMouseMove={this.scrub}>
						<path d={`
						M 0,${this.ht - bevel}
						C 0,${this.ht - bevel} 0,${this.ht} ${bevel},${this.ht} L ${this.wd - bevel},${this.ht}
						C ${this.wd - bevel},${this.ht} ${this.wd},${this.ht} ${this.wd},${this.ht - bevel} L ${this.wd},${bevel}
						C ${this.wd},${bevel} ${this.wd},0 ${this.wd - bevel},0 L ${bevel},0
						C ${bevel},0 0,0 0,${bevel} L 0,${this.ht - bevel}
						`} />
						<line x1={0} y1={this.ht / 2} x2={this.wd} y2={this.ht / 2} stroke={fg} strokeWidth={3} />
					</svg>
				</div>
				{this.props.marked && <svg className="inc">
					{[...Array(this.props.mark).keys()].map((i) =>
						<line x1={margin * 2} y1={i * markStride} x2={(margin * 2) + 20} y2={i * markStride} className="tick" key={i} />
					)}
				</svg>}
			</div>
		);
	}
}

Fader.defaultProps = {
	ln: 100
};

export default Fader;
