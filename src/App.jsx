import Osc from "./Osc.jsx";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "running") {
				window.ctx.suspend();
			}

			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Osc />
		</div>
  );
}

export default App;
