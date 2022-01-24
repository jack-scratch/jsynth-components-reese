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
	constructor(props) {
		super(props);

		this.state = {
			map: {}
		};
	}

	async componentDidMount() {
		await window.ctx.audioWorklet.addModule(`worklet/${this.props.fName}.js`);

		// source
		this.node = new AudioWorkletNode(window.ctx, "sin");

		for (let key of this.node.parameters.keys()) {
			this.state.map[key] = null;
		}

		let i = 0;
		for (let val of this.node.parameters.values()) {
			let key = Object.keys(this.state.map)[i];

			this.state.map[key] = {
				min: val.minValue,
				max: val.maxValue
			};

			i++;
		}

// 		for (let asdf of Object.keys(this.state.map)) {
// 			alert(asdf);
// 			alert(this.state.map[asdf].max);
// 			alert(this.state.map[asdf].min);
// 		}

		this.setState({
		});

		// route
		this.node.connect(window.ctx.destination);
	}

	render() {
		return (
			<div>
				{Object.keys(this.state.map).map((key, val) => <div>{key}</div>)}
			</div>
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
