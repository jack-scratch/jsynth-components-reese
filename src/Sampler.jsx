import React from "react";
import TextDisp from "./periph/TextDisp";
import {
	Btn
} from "./Btn";
import {
	FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faSortUp,
	faSortDown
} from "@fortawesome/free-solid-svg-icons";

class Sampler extends React.Component {
	sampRate = [
		8000,
		11025,
		16000,
		22050,
		44100,
		48000
	];

	buff = [
		"Bamboo",
		"Bass-Drum-1",
		"Bass-Drum-2",
		"Bass-Drum-3",
		"Boom-Kick",
		"Bottle",
		"Clap-1",
		"Clap-2",
		"Clap-3",
		"Claves"
	];

	play() {
		let req = new XMLHttpRequest();
		req.responseType = "arraybuffer";

		req.open("GET", `./snd/${this.buff[this.state.l]}.wav`, true);

		req.onload = () => {
			let data = req.response;

			window.ctx.decodeAudioData(data, (buff) => {
				let src = window.ctx.createBufferSource();
				src.buffer = buff;

				// Patch
				src.connect(window.ctx.destination);

				// Start
				src.start();
			});
		}

		req.send();
	}

	constructor() {
		super();

		this.state = {
			l: 0,
			fid: 5
		};

		this.play = this.play.bind(this);
	}

	render() {
		return (
			<div className="cont body">
				<div className="head">
					<h1>Sampler</h1>
				</div>
				<div className="body">
					<div className="body">
						<TextDisp buff={[this.sampRate[this.state.fid]]} ln={1} wd={10} />
					</div>
					<div className="body">
						<Btn label={<FontAwesomeIcon icon={faSortUp} />} wd={40} ht={26} hookPush={() => this.setState((prevState) => ({
							fid: Math.min(prevState.fid + 1, 5)
						}))} />
						<Btn label={<FontAwesomeIcon icon={faSortDown} />} wd={40} ht={26} hookPush={() => this.setState((prevState) => ({
							fid: Math.max(prevState.fid - 1, 0)
						}))} />
					</div>
				</div>
				<div className="body" style={{
					display: "flex",
					flexDirection: "row"
				}}>
					<div className="body">
						<TextDisp buff={[this.buff[this.state.l]]} ln={1} />
					</div>
					<div className="body group">
						<Btn label={<FontAwesomeIcon icon={faSortUp} />} wd={40} ht={26} hookPush={() => this.setState((prevState) => ({
							l: Math.min(prevState.l + 1, this.buff.length - 1)
						}))} />
						<Btn label={<FontAwesomeIcon icon={faSortDown} />} wd={40} ht={26} hookPush={() => this.setState((prevState) => ({
							l: Math.max(prevState.l - 1, 0)
						}))}/>
					</div>
				</div>
				<div className="body">
					<Btn label={<FontAwesomeIcon icon={faPlay} />} fName={this.buff[this.state.l]} hookPush={this.play} />
				</div>
			</div>
		);
	}
}

export default Sampler;
