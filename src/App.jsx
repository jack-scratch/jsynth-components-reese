import "./main.css";
import Knob from "./ctrl/Knob";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<div class="cont">
				<div class="head">
					<h1>Reese Bass</h1>
				</div>
				<div class="body">
					<div>
						<Knob />
					</div>
					<div>
						<Knob />
					</div>
				</div>
			</div>
		</div>
  );
}

export default App;
