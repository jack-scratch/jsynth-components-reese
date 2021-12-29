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
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="module">
				<div className="head">
					<Label text={this.props.name} />
				</div>
				<div className="body">
					<div className="ctrl">
						{this.props.refer && this.props.refer.map((inst) =>
							<div key={inst.name}>
								<div className="head">
									<Label text={inst.name} />
								</div>
								<div className="body">
									<div className="body param">
										<In refer={this.props.refer} hookDown={this.props.hookDown} />
										<Knob refer={inst.point} min={this.props.min} max={this.props.max} marked={this.props.marked} unit={unit["freq"]} />
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="body asdf">
						<div className="io">
							{this.props.port.map((inst) =>
								inst.type === "in" ? <In refer={inst.point} key={inst.type} hookDown={this.props.hookDown} /> : <Out refer={inst.point} key={inst.type} hookDown={this.props.hookDown} />
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module;
