import Osc from './Osc';
import Effect from './Effect';
import Out from './Out';
import Knob from './Knob';

import './App.css';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

	let osc = ctx.createOscillator();
	osc.type = 'sine';
	osc.frequency.value = 440.0;

	osc.connect(ctx.destination);

  return (
		<div>
			<Knob osc={osc} />
		</div>
  );
}

export default App;
