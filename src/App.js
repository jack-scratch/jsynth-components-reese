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
		}}></div>
  );
}

export default App;
