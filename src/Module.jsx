import React from "react";
import {
	In,
	Out
} from "./Port";
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
				<div className="body">
					<div className="ctrl">
						{this.props.refer && this.props.refer.map((inst) =>
							<div key={inst.name}>
								<div className="head">
									<Label text={inst.name} />
								</div>
								<div className="body">
									<div className="body param">
										<In hook={this.props.hook} />
										<Knob refer={inst.point} min={this.props.min} max={this.props.max} mark unit="Hz" />
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="body">
						<div className="io">
							{this.props.port.map((inst) =>
								inst.type === "in" ? <In key={inst.type} hook={this.props.hook} /> : <Out key={inst.type} hook={this.props.hook} />
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Module;
