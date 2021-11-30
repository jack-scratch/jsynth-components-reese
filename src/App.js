import Op from './Op.js';

function App() {
	// init
	const ctx = new window.AudioContext() || window.webkitAudioContext();

	// source
	let osc = ctx.createOscillator();
	osc.type = 'sine';
	osc.frequency.value = 440.0;

	osc.connect(ctx.destination);

	// start
	osc.start();

  return (
    <Op name='Operator' />
  );
}

export default App;
