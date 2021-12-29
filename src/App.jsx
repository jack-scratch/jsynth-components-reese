import synth from "./synth.jsx";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
	window.ctx.audioWorklet.addModule("worklet/asdf.js").then(() => {
		let node = new AudioWorkletNode(window.ctx, "noise");

		// route
		node.connect(window.ctx.destination);
	});

  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "running") {
				window.ctx.suspend();
			}

			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			{synth()}
		</div>
  );
}

export default App;
