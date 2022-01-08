import React from "react";
import Cable from "./Cable";
import {
	nutRad,
	portRad
} from "./layout";

class Bay extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			patch: [],
			active: false,
			start: [
				0,
				0
			],
			end: [
				0,
				0
			],
			mid: [
				0,
				0
			]
		};

		this.pushCable = this.pushCable.bind(this);
		this.popCable = this.popCable.bind(this);

		this.release = this.release.bind(this);

		this.setDest = this.setDest.bind(this);

		this.drag = this.drag.bind(this);
	}

	pushCable(e, ref, node) {
		this.setState((prevState) => ({
			active: true,
			start: [
				ref.current.offsetLeft + nutRad + portRad,
				ref.current.offsetTop + nutRad + portRad
			],
			end: [
				e.nativeEvent.clientX,
				e.nativeEvent.clientY
			],
			patch: [
				...prevState.patch,
				{
					inPoint: node,
					endPoint: null
				}
			]
		}), () => {
			this.setState({
				mid: [
					this.midX(),
					(this.state.end[1] > this.state.start[1] ? this.state.end[1] : this.state.start[1]) * 1.6
				]
			});
		});
	}

	popCable() {
		this.state.patch[this.state.patch.length - 1].inPoint.disconnect();

		let ls = [...this.state.patch];

		ls.splice(ls.length - 1, 1);

		this.setState((prevState) => ({
			patch: ls
		}));
	}

	release(e) {
		if (this.state.active) {
			if (this.state.patch[this.state.patch.length - 1].inPoint && this.state.patch[this.state.patch.length - 1].endPoint) {
				this.state.patch[this.state.patch.length - 1].inPoint.connect(this.state.patch[this.state.patch.length - 1].endPoint);

				this.setState({
					active: false
				});
			} else {
				this.popCable();
			}
		}
	}

	setDest(e, ref, node) {
		this.state.patch[this.state.patch.length - 1].endPoint = node;

		this.state.patch[this.state.patch.length - 1].inPoint.connect(this.state.patch[this.state.patch.length - 1].endPoint);

		this.setState({
			end: [
				ref.current.offsetLeft + nutRad + portRad,
				ref.current.offsetTop + nutRad + portRad
			]
		});
	}

	midX() {
		let first;
		let snd;
		if (this.state.end[0] > this.state.start[0]) {
			first = this.state.start[0];
			snd = this.state.end[0];
		} else {
			first = this.state.end[0];
			snd = this.state.start[0];
		}

		let delta = snd - first;

		return first + (delta / 2);
	}

	drag(e) {
		if (this.state.active) {
			this.setState({
				end: [
					e.nativeEvent.clientX,
					e.nativeEvent.clientY
				]
			}, () => {
				this.setState({
					mid: [
						this.midX(),
						(this.state.end[1] > this.state.start[1] ? this.state.end[1] : this.state.start[1]) * 1.6
					]
				});
			});
		}
	}

	render() {
		return (
			<div className="sys" onMouseMove={(e) => this.drag(e)} onMouseUp={this.release}>
				{this.props.module && this.props.module.map((el, i) =>
					React.cloneElement(el, {
						hookOutDown: this.pushCable,
						hookInUp: this.setDest,
						key: i
					})
				)}

				{this.state.patch.map((el, i) =>
					<Cable start={this.state.start} end={this.state.end} mid={this.state.mid} inPoint={el.inPoint} key={i} />
				)}
			</div>
		);
	}
}

export default Bay;
