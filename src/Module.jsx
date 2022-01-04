import React from "react";
import {
	In,
	Out
} from "./Port";
import Label from "./Label";
import Knob from "./Knob";
import {
	unit
} from "./fmt";

import "./Module.css";

class Module extends React.Component {
	render() {
		return (
			<div className="module">
				<div className="head">
					<Label text={this.props.name} />
				</div>
				<div className="body">
					<div className="ctrl">
						{this.props.node && this.props.node.map((inst) =>
							<div key={inst.name}>
								<div className="head">
									<Label text={inst.name} />
								</div>
								<div className="body">
									<div className="body param">
										<In node={this.props.node} hookDown={this.props.hookDown} hookEnter={this.props.hookEnter} />
										<Knob node={inst.point} min={this.props.min} max={this.props.max} marked={this.props.marked} unit={unit["freq"]} quant={inst.quant ? inst.quant : null} />
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="body">
						<div className="io">
							{this.props.port.map((inst) =>
								inst.type === "in" ? <In point={inst.point} hookUp={this.props.hookUp} /> : <Out point={inst.point} key={inst.type} hookDown={this.props.hookDown} hookEnter={this.props.hookEnter} key={inst.type} />
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module;
