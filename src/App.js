import Op from './Op.js';

function App() {
	const ctx = new window.AudioContext() || window.webkitAudioContext();

  return (
    <Op name='Operator' ctx={ctx} />
  );
}

export default App;
