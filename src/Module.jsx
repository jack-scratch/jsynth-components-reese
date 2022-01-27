import React from "react";
import {
	In,
	Out
} from "./Port";
import Label from "./Label";
import Knob from "./Knob";

import "./Module.css";

class Module extends React.Component {
	constructor(props) {
		super(props);
		
		this.node = {};
	}

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
										<In point={el.point} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} activeCable={this.props.activeCable} />
										<Knob param={el.point} min={el.min ? el.min : el.point.minValue} max={el.max ? el.max : el.point.maxValue} marked={this.props.marked} unit={el.unit} quant={el.quant ? el.quant : null} />
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="body">
						<div className="io">
							{this.props.port.map((el) => el.type === "in" ? <In point={el.point} hookInDown={this.props.hookInDown} hookInUp={this.props.hookInUp} activeCable={this.props.activeCable} key={el.type} /> : <Out point={el.point} hookOutDown={this.props.hookOutDown} activeCable={this.props.activeCable} key={el.type} />)}
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		);
	}
}

export default Module;
