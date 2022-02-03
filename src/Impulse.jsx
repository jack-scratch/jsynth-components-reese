import React from "react";
import {
	Btn
} from "./Btn";

class Impulse extends React.Component {
	constructor(props) {
		super();

		this.state = {
			buff: null
		};

		this.play = this.play.bind(this);
	}

	play() {
		let req = new XMLHttpRequest();
		req.responseType = "arraybuffer";

		req.open("GET", `./snd/${this.props.fName}.wav`, true);

		req.onload = () => {
			let data = req.response;

			window.ctx.decodeAudioData(data, (buff) => {
				let src = window.ctx.createBufferSource();
				src.buffer = buff;

				// patch
				src.connect(window.ctx.destination);

				// start
				src.start();
			});
		}

		req.send();
	}

	render() {
		return (
			<div className="sys" onClick={this.play}>
				<div className="body">
					<Btn buff={this.state.buff} name={this.props.name} />
				</div>
			</div>
		);
	}
}

export default Impulse;
