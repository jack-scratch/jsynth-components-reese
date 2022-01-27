import React from "react";
import Module from "./Module";
import Bay from "./Bay";
import Osc from "./Osc";
import speaker from "./speaker";
import Text from "./Text";
import Worklet from "./Worklet";
import Bitcrush from "./Bitcrush";
import {
	Btn
} from "./Btn";
import Op from "./Op";
import Fader from "./Fader";

import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
	let osc = window.ctx.createOscillator();

  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Bay>
				<Osc marked />
				<Osc marked />
			</Bay>
		</div>
  );
}

export default App;
