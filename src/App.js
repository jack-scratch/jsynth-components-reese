import Op from './Op.js';

function App() {
	// init
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
    <Op name='Operator' ctx={ctx} />
  );
}

export default App;
