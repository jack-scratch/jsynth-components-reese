const ctx = new window.AudioContext() || window.webkitAudioContext();

function App() {
  return (
		<div id="app" onClick={() => {
			if (ctx.state === "running") {
				ctx.suspend();
			}

			if (ctx.state === "suspended") {
				ctx.resume();
			}
		}}></div>
  );
}

export default App;
