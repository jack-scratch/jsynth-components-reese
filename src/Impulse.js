import React from "react";
import Btn from "./Btn";
import PortOut from "./PortOut";
import ctx from "./ctx";

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

		req.open("GET", "./asdf.wav", true);

		req.onload = () => {
			let data = req.response;

			ctx.decodeAudioData(data, (buff) => {
				let src = ctx.createBufferSource();
				src.buffer = buff;

				src.start();

				src.connect(ctx.destination);
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
						<PortOut />
					</div>
				</div>
			</div>
		);
	}
}

export default Impulse;
