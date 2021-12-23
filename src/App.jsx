import Sample from "./Sample.jsx";
import Bay from "./Bay.jsx";
import speaker from "./speaker.jsx";

function App() {
	window.ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
		<div id="app" onClick={() => {
			if (window.ctx.state === "running") {
				window.ctx.suspend();
			}

			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Sample />
		<Bay />
		</div>
  );
}

export default App;
