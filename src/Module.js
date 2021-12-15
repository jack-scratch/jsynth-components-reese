import React from "react";
import Port from "./Port";
import Label from "./Label";
import Knob from "./Knob";

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
				<div className="ctrl">
					{this.props.param.map((inst) =>
						<div key={inst.name}>
							<div className="head">
								<Label text={inst.name} />
							</div>
							<div className="body">
								<Knob paramRef={this.props.paramRef} min={this.props.min} max={this.props.max} />
							</div>
						</div>
					)}
				</div>
				<div className="body">
					<div className="io">
						{this.props.port.map((type) =>
							<div key="{type}">
								<Port type={type} />
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
};

export default Module;
