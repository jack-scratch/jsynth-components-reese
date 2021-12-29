import synth from "./synth.jsx";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
	window.ctx.audioWorklet.addModule("worklet/dsp.js").then(() => {
		// source
		const oscillator = window.ctx.createOscillator();

		oscillator.type = "sine";
		oscillator.frequency.value = 5000.0;

		// effect
		const bitCrusherNode = new AudioWorkletNode(window.ctx, "bitcrush");

		const paramBitDepth = bitCrusherNode.parameters.get("bitDepth");
		paramBitDepth.setValueAtTime(1.0, 0.0);

		const paramReduction = bitCrusherNode.parameters.get("frequencyReduction");

		const beginning = window.ctx.currentTime;
		const middle = window.ctx.currentTime + 4;
		const end = window.ctx.currentTime + 8;

		// schedule
		paramReduction.setValueAtTime(0.01, beginning);
		paramReduction.linearRampToValueAtTime(0.1, middle);
		paramReduction.exponentialRampToValueAtTime(0.01, end);

		// route
		oscillator.connect(bitCrusherNode).connect(window.ctx.destination);

		// start
		oscillator.start();
		oscillator.stop(end);
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
