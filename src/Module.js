import React from "react";
import PortIn from "./PortIn";
import PortOut from "./PortOut";
import Label from "./Label";
import Knob from "./Knob";

import "./Module.css";

class Module extends React.Component {
	render() {
		return (
			<div className="module">
				<div className="head">
					<Label text={this.props.name} />
				</div>
				<div className="ctrl">
					{this.props.refer.map((inst) =>
						<div key={inst.name}>
							<div className="head">
								<Label text={inst.name} />
							</div>
							<div className="body">
								<div className="body param">
									<PortIn />
									<Knob refer={inst.point} min={this.props.min} max={this.props.max} />
								</div>
							</div>
						</div>
					)}
				</div>
				<div className="body">
					<div className="io">
						{this.props.port.map((type) =>
							type === "in" ? <PortIn key={type} /> : <PortOut key={type} />
						)}
					</div>
				</div>
			</div>
		);
	}
};

export default Module;
