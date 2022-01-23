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
		await window.ctx.audioWorklet.addModule(`worklet/${this.props.name}.js`);

		// source
		this.node = new AudioWorkletNode(window.ctx, "sin");

		// route
		this.node.connect(window.ctx.destination);
	}

	render() {
		return (
			<div>asdf</div>
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
				<Worklet name="dsp" />
			</Bay>
		</div>
  );
}

export default App;
