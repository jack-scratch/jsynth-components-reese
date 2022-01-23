import Bay from "./Bay";
import Osc from "./Osc";
import speaker from "./speaker";

import "./main.css";

window.ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div id="app" onMouseDown={() => {
			if (window.ctx.state === "suspended") {
				window.ctx.resume();
			}
		}}>
			<Bay>
				<Osc />
				{speaker()}
			</Bay>
		</div>
  );
}

export default App;
