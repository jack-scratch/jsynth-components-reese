import React from "react";
import Cable from "./Cable";
import {
	nutRad,
	portRad
} from "./layout";

class Bay extends React.Component {
	constructor(props) {
		super();

		this.state = {
			patch: [],
			active: false,
			startCurr: [
				0,
				0
			],
			endCurr: [
				0,
				0
			]
		};

		this.pushCable = this.pushCable.bind(this);
		this.rmCable = this.rmCable.bind(this);
		this.popCable = this.popCable.bind(this);

		this.detachCable = this.detachCable.bind(this);

		this.release = this.release.bind(this);

		this.conn = this.conn.bind(this);

		this.drag = this.drag.bind(this);
	}

	pushCable(e, refer, node) {
		this.setState((prevState) => ({
			active: true,
			startCurr: [
				refer.current.offsetLeft + nutRad + portRad,
				refer.current.offsetTop + nutRad + portRad
			],
			endCurr: [
				e.nativeEvent.clientX,
				e.nativeEvent.clientY
			],
			patch: [
				...prevState.patch,
				{
					inPoint: node,
					endPoint: null,
					inRefer: refer,
					outRefer: null
				}
			]
		}));
	}

	rmCable(i) {
		this.state.patch[this.state.patch.length - 1].inPoint.disconnect();

		let ls = [...this.state.patch];

		ls.splice(i, 1);

		this.setState((prevState) => ({
			patch: ls
		}));
	}

	popCable() {
		this.rmCable(this.state.patch.length - 1);
	}

	detachCable(e, refer, node) {
		this.state.patch[this.state.patch.length - 1].inPoint.disconnect();

		this.state.patch[this.state.patch.length - 1].endPoint = null;
		this.state.patch[this.state.patch.length - 1].outRefer = null;

		this.setState({
			active: true
		});
	}

	release(e) {
		let i = this.state.patch.length - 1;

		if (this.state.active) {
			if (this.state.patch[i].inPoint && this.state.patch[i].endPoint) {
				this.setState({
					active: false
				});
			} else {
				this.popCable();
			}
		}
	}

	conn(e, refer, node) {
		let i = this.state.patch.length - 1;

		this.state.patch[i].endPoint = node;
		this.state.patch[i].endRefer = refer;

		this.state.patch[i].inPoint.connect(this.state.patch[i].endPoint);

		this.setState({
			endCurr: [
				refer.current.offsetLeft + nutRad + portRad,
				refer.current.offsetTop + nutRad + portRad
			]
		});
	}

	drag(e) {
		if (this.state.active) {
			this.setState({
				endCurr: [
					e.nativeEvent.clientX,
					e.nativeEvent.clientY
				]
			});
		}
	}

	render() {
		return (
			<div className="sys" onMouseMove={(e) => this.drag(e)} onMouseUp={this.release}>
				{this.props.module && this.props.module.map((el, i) =>
					React.cloneElement(el, {
						hookOutDown: this.pushCable,
						hookInDown: this.detachCable,
						hookInUp: this.conn,
						key: i
					})
				)}

				{this.state.patch.map((el, i) => <Cable startCurr={this.state.startCurr} endCurr={this.state.endCurr} inPoint={el.inPoint} endPoint={el.endPoint} inRefer={el.inRefer} endRefer={el.outRefer} key={i} />)}
			</div>
		);
	}
}

export default Bay;
