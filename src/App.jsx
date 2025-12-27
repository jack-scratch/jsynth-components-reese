import "./main.css";
import Knob from "./ctrl/Knob";
import React from "react";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

class Reese extends React.Component {
	constructor(props) {
		super(props);

		this.osc = [
			window.ctx.createOscillator(),
			window.ctx.createOscillator()
		];
	}

	render() {
		return <div class="cont">
			<div class="head">
			<h1>Reese Bass</h1>
			</div>
			<div class="body">
			<div>
			<Knob val={this.osc[0].frequency.value} />
			</div>
			<div>
			<Knob val={this.osc[1].frequency.value} />
			</div>
			</div>
			</div>;
	}
}

function App() {
  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Reese />
		</div>
  );
}

export default App;
