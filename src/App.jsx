import Bay from "./Bay.jsx";
import Osc from "./Osc.jsx";
import Board from "./Board.jsx";
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
		<div className="body">
		<div className="body">
		<Bay module={[
			<Osc />,
			speaker()
		]} />
		</div>
		</div>
		<Board />
		</div>
  );
}

export default App;
