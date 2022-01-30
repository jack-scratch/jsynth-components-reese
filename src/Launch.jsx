import React from "react";
import {
	Btn
} from "./Btn";
import Light from "./Light";

import "./Launch.css";

class Launch extends React.Component {
	constructor(props) {
		super(props);

		this.play = this.play.bind(this);
	}

	play(i) {
		let name = this.props.sample[i];

		let req = new XMLHttpRequest();
		req.responseType = "arraybuffer";

		req.open("GET", `snd/${name}.wav`, true);

		req.onload = () => {
			let data = req.response;

			window.ctx.decodeAudioData(data, function(buff) {
				let dataBuff = buff.getChannelData(0);

				let sampBuff = window.ctx.createBuffer(1, dataBuff.length, window.ctx.sampleRate);

				let ln = 0.7;

				let ref = sampBuff.getChannelData(0);
				for (let i = 0; i < ln * window.ctx.sampleRate; i++) {
					ref[i] = dataBuff[i];
				}

				let src = window.ctx.createBufferSource();
				src.buffer = sampBuff;

				src.connect(window.ctx.destination);

				src.start();
			});
		}

		req.send();
	}

	render() {
		return (
			<div className="launch">
				<div className="head">
					<h1>Launchpad</h1>
					<Light />
				</div>
				<div className="body">
					<div className="group">
						<table>
							<tbody>
								{[...Array(this.props.y).keys()].map((j) =>
									<tr key={`"row-${j}"`}>
										{[...Array(this.props.x).keys()].map((i) =>
											<td key={`btn-${i}`}>
												<Btn wd={80} ht={80} name={1 + ((j * this.props.y) + i)} hookPush={() => this.play((j * this.props.x) + i)} />
											</td>
										)}
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

Launch.defaultProps = {
	x: 1,
	y: 1
};

export default Launch;
