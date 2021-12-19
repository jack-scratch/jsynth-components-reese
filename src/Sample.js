import React from "react";
import Btn from "./Btn";

import "./main.css";

class Sample extends React.Component {
	constructor(props) {
		super(props);

		const ln = 0.5;

		const buffLn = ln * ctx.sampleRate;

		this.state = {
			buff: ctx.createBuffer(1, buffLn, ctx.sampleRate)
		};

		const hz = 440.0;

		const pitch = buffLn / (ln * hz);

		let data = this.state.buff.getChannelData(0);

		for (let i = 0; i < buffLn; i++) {
			data[i] = Math.sin((i / pitch) * Math.PI * 2);
		}
	}

	render() {
		return (
			<div className="cont">
				<div className="body">
					<Btn buff={this.state.buff} />
				</div>
			</div>
		);
	}
}

export default Sample;
