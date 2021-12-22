import Bay from "./Bay.jsx";
import Osc from "./Osc.jsx";
import {
	In
} from "./Port.jsx";
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
			<Bay module={[
				<Osc />,
				speaker()
			]} />
		</div>
  );
}

export default App;
