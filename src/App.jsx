import Sample from "./Sample.jsx";
import Bay from "./Bay.jsx";
import Osc from "./Osc.jsx";
import Lowpass from "./Lowpass.jsx";
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
				<div>
					<Osc />,
					<Osc />,
					<Osc />
				</div>, <div>
					<Lowpass />
				</div>, <div>
					{speaker()}
				</div>
			]} />
		</div>
  );
}

export default App;
