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
			],
			activeCable: null
		};

		this.pushCable = this.pushCable.bind(this);
		this.rmCable = this.rmCable.bind(this);
		this.popCable = this.popCable.bind(this);

		this.connCable = this.connCable.bind(this);

		this.detachCable = this.detachCable.bind(this);

		this.drag = this.drag.bind(this);

		this.release = this.release.bind(this);
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
		}), () => {
			this.setState({
				activeCable: this.state.patch.length - 1
			});
		});
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

	connCable(refer, node, i) {
		this.state.patch[i].outPoint = node;
		this.state.patch[i].outRefer = refer;

		this.state.patch[i].inPoint.connect(this.state.patch[i].outPoint);

		this.setState({
			active: false
		});
	}

	detachCable(e, refer, node, i) {
		this.state.patch[i].outPoint = null;
		this.state.patch[i].outRefer = null;

		this.state.patch[i].inPoint.disconnect();

		this.setState({
			active: true
		});
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

	release() {
		this.setState({
			active: false
		});
	}

	render() {
		return (
			<div className="cont" id="bay" onMouseUp={(e) => this.release()} onMouseMove={(e) => this.drag(e)}>
				{this.props.children && this.props.children.map((el, i) =>
					React.cloneElement(el, {
						hookOutDown: this.pushCable,
						hookInDown: this.detachCable,
						hookInUp: this.connCable,
						activeCable: this.state.activeCable,
						key: i
					})
				)}

				{this.state.patch.map((el, i) => <Cable curr={this.state.curr} inPoint={el.inPoint} outPoint={el.outPoint} inRefer={el.inRefer} outRefer={el.outRefer} key={i} />)}
			</div>
		);
	}
}

export default Bay;
