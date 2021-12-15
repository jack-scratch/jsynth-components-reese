import Op from "./Op";
import Effect from "./Effect";
import Out from "./Out";
import Knob from "./Knob";
import Launch from "./Launch";
import Pulse from "./Pulse";
import Module from "./Module";
import Gain from "./Gain";
import Filter from "./Filter";
import Osc from "./Osc";
import Cable from "./Cable";

import "./main.css";

const a = 440.0;

const ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div id="app" onClick={() => {
			if (ctx.state == "running") {
				ctx.suspend();
			}

			if (ctx.state == "suspended") {
				ctx.resume();
			}
		}}>
			<div className="sys">
				<Gain ctx={ctx} min={-12} max={12} />
				<Op ctx={ctx} type="sine" hz={a} level={0.0} />
				<Filter ctx={ctx} type="lowpass" hz={100.0} />
				<Osc ctx={ctx} type="sine" hz={a} />
			</div>
		</div>
  );
}

export default App;
