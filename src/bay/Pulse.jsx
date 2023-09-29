import React from "react";
import Source from "./Source";
import {
	Btn
} from "../ctrl/Btn";
import {
	unit
} from "../fmt";

class Pulse extends Source {
	render() {
		return (
			<Source name={this.props.name} port={[
				{
					type: "out",
					point: this.node.main
				}
			]} c={this.props.c} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} hookOutDown={this.props.hookOutDown} hookInEnter={this.props.hookInEnter} hookInLeave={this.props.hookInLeave} marked={this.props.marked}>
				<div className="body">
					<Btn hookPush={this.props.hookTrigger} />
				</div>
			</Source>
		);
	}
}

export default Pulse;
