import Op from "./Op";
import Effect from "./Effect";
import Out from "./Out";
import Knob from "./Knob";
import Launch from "./Launch";
import Pulse from "./Pulse";
import Module from "./Module";
import Gain from "./Gain";

import "./main.css";

const a = 440.0;

const ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div onClick={() => {
			if (ctx.state == "running") {
				ctx.suspend();
			}

			if (ctx.state == "suspended") {
				ctx.resume();
			}
		}}>
			<Gain ctx={ctx} min={-12} max={12} />
			<Op ctx={ctx} type="sine" hz={a} />
		</div>
  );
}

export default App;
