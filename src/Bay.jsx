import React from "react";
import Cable from "./Cable";

class Bay extends React.Component {
	constructor(props) {
		super();

		this.state = {
			patch: [],
			active: false,
			curr: [
				0,
				0
			]
		};

		this.pushCable = this.pushCable.bind(this);
		this.rmCable = this.rmCable.bind(this);
		this.popCable = this.popCable.bind(this);

		this.detachCable = this.detachCable.bind(this);

		this.release = this.release.bind(this);

		this.connCable = this.connCable.bind(this);

		this.drag = this.drag.bind(this);
	}

	pushCable(e, refer, node) {
		this.setState((prevState) => ({
			curr: [
				e.nativeEvent.clientX,
				e.nativeEvent.clientY
			],
			patch: [
				...prevState.patch,
				{
					inPoint: node,
					outPoint: null,
					inRefer: refer,
					outRefer: null
				}
			],
			active: true
		}));
	}

	rmCable(i) {
		this.state.patch[i].inPoint.disconnect();

		let ls = [...this.state.patch];

		ls.splice(i, 1);

		this.setState((prevState) => ({
			patch: ls
		}));
	}

	popCable() {
		let i = this.state.patch.length - 1;

		this.rmCable(i);
	}

	detachCable(e, refer, node) {
		let i = this.state.patch.length - 1;

		this.state.patch[i].outPoint = null;
		this.state.patch[i].outRefer = null;

		this.state.patch[i].inPoint.disconnect();

		this.setState({
			active: true
		});
	}

	connCable(e, refer, node) {
		let i = this.state.patch.length - 1;

		this.state.patch[i].outPoint = node;
		this.state.patch[i].outRefer = refer;

		this.state.patch[i].inPoint.connect(this.state.patch[i].outPoint);
	}

	drag(e) {
		if (this.state.active) {
			this.setState({
				curr: [
					e.nativeEvent.clientX,
					e.nativeEvent.clientY
				]
			});
		}
	}

	release(e, i) {
		if (this.state.active) {
			if (this.state.patch[i].inPoint && this.state.patch[i].outPoint) {
				this.setState({
					active: false
				});
			} else {
				this.rmCable(i);
			}
		}
	}

	render() {
		return (
			<div className="cont" id="bay" onMouseMove={(e) => this.drag(e)} onMouseUp={(e) => this.release(e, this.state.patch.length - 1)}>
				{this.props.children && this.props.children.map((el, i) =>
					React.cloneElement(el, {
						hookOutDown: this.pushCable,
						hookInDown: this.detachCable,
						hookInUp: this.connCable,
						key: i
					})
				)}

				{this.state.patch.map((el, i) => <Cable curr={this.state.curr} inPoint={el.inPoint} outPoint={el.outPoint} inRefer={el.inRefer} outRefer={el.outRefer} key={i} />)}
			</div>
		);
	}
}

export default Bay;
