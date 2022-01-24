import React from "react";
import Module from "./Module";
import Bay from "./Bay";
import Osc from "./Osc";
import speaker from "./speaker";
import Text from "./Text";
import Bitcrush from "./Bitcrush";

import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

class Worklet extends Module {
	async componentDidMount() {
		await window.ctx.audioWorklet.addModule(`worklet/${this.props.fName}.js`);

		// source
		this.node = new AudioWorkletNode(window.ctx, "sin");

		this.map = {};

		for (let key of this.node.parameters.keys()) {
			this.map[key] = null;
		}

		let i = 0;
		for (let val of this.node.parameters.values()) {
			let key = Object.keys(this.map)[i];

			this.map[key] = {
				min: val.minValue,
				max: val.maxValue
			};

			i++;
		}

		for (let asdf of Object.keys(this.map)) {
			alert(asdf);
			alert(this.map[asdf].max);
			alert(this.map[asdf].min);
		}

		// route
		this.node.connect(window.ctx.destination);
	}

	render() {
		return (
			<Module name="asdf" port={[
				{
					type: "in",
					point: this.node.main
				}, {
					type: "out",
					point: this.node.main
				}
			]} />
		);
	}
}

function App() {
  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Bay>
				<Osc />
				{speaker()}
				<Worklet fName="dsp" />
			</Bay>
		</div>
  );
}

export default App;
