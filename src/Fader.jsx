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
	wd = 30;
	ht = 60;

	constructor(props) {
		super();

		this.markRef = React.createRef();

		this.state = {
			val: 0,
			down: false
		};

		this.scrub = this.scrub.bind(this);
	}

	componentDidMount() {
		if (this.props.marked) {
			this.markBound = [
				this.markRef.current.getBBox().x,
				this.markRef.current.getBBox().y
			];
		}
	}

	scrub(e) {
		if (this.state.down) {
			this.setState({
				val: e.nativeEvent.offsetY
			}, () => {
				this.props.hook(this.state.val);
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
					<svg xmlns="http://www.w3.org/1999/xhtml" version="1.1" className="thumb" width={this.wd} height={this.ht} onMouseDown={() => this.setState({
						down: true
					})} onMouseUp={() => this.setState({
						down: false
					})} onMouseLeave={() => this.setState({
						down: false
					})} onMouseMove={this.scrub} transform={`translate(-${this.wd / 2}, -${(this.ht / 2) - this.state.val})`}>
						<path d={`
						M 0,${this.ht - bevel}
						C 0,${this.ht - bevel} 0,${this.ht} ${bevel},${this.ht} L ${this.wd - bevel},${this.ht}
						C ${this.wd - bevel},${this.ht} ${this.wd},${this.ht} ${this.wd},${this.ht - bevel} L ${this.wd},${bevel}
						C ${this.wd},${bevel} ${this.wd},0 ${this.wd - bevel},0 L ${bevel},0
						C ${bevel},0 0,0 0,${bevel} L 0,${this.ht - bevel}
						`} />
						<line className="tick" x1={0} y1={this.ht / 2} x2={this.wd} y2={this.ht / 2} />
					</svg>
				</div>
				{this.props.marked && <svg className="inc" ref={this.markRef}>
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
