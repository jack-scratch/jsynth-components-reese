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
						{this.props.param && this.props.param.map((el) =>
							<div key={el.name}>
								<div className="head">
									<Label text={el.name} />
								</div>
								<div className="body">
									<div className="body param">
										<In param={this.props.param} hookOutDown={this.props.hookOutDown} hookEnter={this.props.hookEnter} />
										<Knob param={el.point} min={el.min ? el.min : el.point.minValue} max={el.max ? el.max : el.point.maxValue} marked={this.props.marked} unit={unit["freq"]} quant={el.quant ? el.quant : null} />
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="body">
						<div className="io">
							{this.props.port.map((el) =>
								el.type === "in" ? <In point={el.point} hookInUp={this.props.hookInUp} hookEnter={this.props.hookEnter} key={el.type} /> : <Out point={el.point} hookOutDown={this.props.hookOutDown} hookEnter={this.props.hookEnter} key={el.type} />
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module;
