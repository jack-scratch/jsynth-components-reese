import Op from './Op';
import Effect from './Effect';
import Out from './Out';
import Knob from './Knob';

import './App.css';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

	let osc = ctx.createOscillator();
	osc.type = 'sine';
	osc.frequency.value = 440.0;

	osc.start();

  return (
		<div onClick={() => {
			if (ctx.state == 'running') {
				ctx.suspend().then(function() {
					osc.disconnect(ctx.destination);
				});
			}

			if (ctx.state == 'suspended') {
				ctx.resume().then(function() {
					osc.connect(ctx.destination);
				});
			}
		}}>
			<Knob paramRef={osc.frequency} />
		</div>
  );
}

export default App;
