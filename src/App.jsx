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

		this.setState({
		});

		// route
		this.node.connect(window.ctx.destination);
	}

	render() {
		return (
			<Module name="asdf" param={Object.keys(this.state.map).map((key) => (
				{
					name: key,
					point: this.node,
					min: this.state.map[key].min,
					max: this.state.map[key].max
				}
			))} port={[
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
