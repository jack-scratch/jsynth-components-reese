import React from "react";
import {
	Btn
} from "./Btn";
import {
	Out
} from "./Port";

class Impulse extends React.Component {
	constructor(props) {
		super(props);

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

				// route
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

					<div className="io">
						<Out />
					</div>
				</div>
			</div>
		);
	}
}

export default Impulse;
